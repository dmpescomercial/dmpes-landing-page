import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

// Compile only the policy and its real UI dependencies using the pinned TypeScript.
// An ignored directory keeps React resolution local and leaves tracked files intact.
mkdirSync('.next', { recursive: true });
const output = mkdtempSync(path.resolve('.next/commercial-tests-'));
try {
  execFileSync(process.execPath, [
    'node_modules/typescript/bin/tsc', '--ignoreConfig', '--target', 'ES2022',
    '--module', 'commonjs', '--moduleResolution', 'node', '--ignoreDeprecations', '6.0',
    '--jsx', 'react-jsx', '--esModuleInterop', '--skipLibCheck', '--strict',
    '--rootDir', '.', '--outDir', output,
    'lib/commercial-links.ts', 'components/ui/commercial-action.tsx',
  ], { stdio: 'inherit' });
  const require = createRequire(import.meta.url);
  const { renderToStaticMarkup } = require('react-dom/server');
  const { createElement } = require('react');
  const policy = require(path.join(output, 'lib/commercial-links.js'));
  const { CommercialAction, CommercialNotice } = require(path.join(output, 'components/ui/commercial-action.js'));
  const { commercialLinks, hasCommercialPrerequisites, getCommercialPresentation } = policy;
  const pendingUrl = 'https://commercial.invalid/pending-private-destination';
  const complete = {
    ...commercialLinks.checkout, suppliedUrl: pendingUrl,
    ownerConfirmation: 'confirmed', independentVerification: 'verified',
    activationAuthorization: 'authorized', operationalAvailability: 'available',
  };

  test('both channels start blocked with no URL and separate pending states', () => {
    for (const state of Object.values(commercialLinks)) {
      assert.equal(state.suppliedUrl, null);
      assert.equal(state.ownerConfirmation, 'pending');
      assert.equal(state.independentVerification, 'pending');
      assert.equal(state.activationAuthorization, 'pending');
      assert.equal(state.operationalAvailability, 'unavailable');
      assert.equal(hasCommercialPrerequisites(state), false);
      assert.equal(getCommercialPresentation(state).available, false);
    }
  });
  test('each prerequisite is required independently', () => {
    assert.equal(hasCommercialPrerequisites(complete), true);
    for (const [field, value] of Object.entries({ suppliedUrl: null, ownerConfirmation: 'pending', independentVerification: 'pending', activationAuthorization: 'pending', operationalAvailability: 'unavailable' })) {
      assert.equal(hasCommercialPrerequisites({ ...complete, [field]: value }), false, field);
    }
    assert.equal(hasCommercialPrerequisites({ ...commercialLinks.checkout, suppliedUrl: pendingUrl }), false);
    assert.equal(hasCommercialPrerequisites({ ...commercialLinks.checkout, suppliedUrl: pendingUrl, ownerConfirmation: 'confirmed' }), false);
    for (const suppliedUrl of ['', 'invalid', 'javascript:alert(1)', 'http://commercial.invalid', 'https://user:pass@commercial.invalid']) {
      assert.equal(hasCommercialPrerequisites({ ...complete, suppliedUrl }), false);
    }
  });
  test('phase lock prevents activation and presentation never contains the URL', () => {
    assert.deepEqual(getCommercialPresentation(complete), { available: false, explanation: complete.explanation });
    assert.ok(!JSON.stringify(getCommercialPresentation(complete)).includes(pendingUrl));
  });
  test('real actions and notices never expose supplied URLs, even with all gates set', () => {
    for (const channel of ['checkout', 'whatsapp']) {
      const original = commercialLinks[channel];
      try {
        for (const fixture of [{ ...original, suppliedUrl: pendingUrl }, { ...complete, explanation: original.explanation }]) {
          commercialLinks[channel] = fixture;
          const html = renderToStaticMarkup(createElement(CommercialAction, { channel, id: `test-${channel}`, label: 'Ação comercial', primary: true }));
          assert.match(html, /<button[^>]*type="button"[^>]*disabled=""/);
          assert.match(html, new RegExp(`aria-describedby="test-${channel}-status"`));
          assert.match(html, new RegExp(`<p id="test-${channel}-status">`));
          assert.ok(html.includes(original.explanation));
          assert.match(html, /pending-primary/);
          assert.ok(!html.includes(pendingUrl));
          assert.ok(!/href=|data-|<a\b|hidden/.test(html));
          const notice = renderToStaticMarkup(createElement(CommercialNotice, { channel, className: 'checkout-status' }));
          assert.ok(!notice.includes(pendingUrl));
          assert.ok(notice.includes(original.explanation));
        }
      } finally { commercialLinks[channel] = original; }
    }
    const secondary = renderToStaticMarkup(createElement(CommercialAction, { channel: 'whatsapp', id: 'secondary', label: 'Contato' }));
    assert.match(secondary, /pending-secondary/);
  });
  test('Hero retains its legitimate internal action', () => {
    const hero = readFileSync('components/sections/hero.tsx', 'utf8');
    assert.match(hero, /<AnchorButton href="#universo">Explorar o DMPES<\/AnchorButton>/);
    const anchor = readFileSync('components/ui/anchor-button.tsx', 'utf8');
    assert.match(anchor, /href=\{href\}/);
  });
} finally {
  rmSync(output, { recursive: true, force: true });
}
