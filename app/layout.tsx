import type { Metadata } from "next";
import type { ReactNode } from "react";
import { product } from "@/content/product";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/anton/latin-400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: `${product.name} ${product.version} — ${product.edition}`,
  description: product.description,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a>{children}</body></html>;
}
