/** Populate only with authentic, owner-approved files and usage permissions. */
export type ApprovedImage = {
  src: `/assets/${string}`;
  alt: string;
  width: number;
  height: number;
};

export type ApprovedGameplay = {
  src: `/assets/${string}.mp4`;
  label: string;
  /** Required real poster, also used when video playback fails. */
  fallback: ApprovedImage;
  captions?: { src: `/assets/${string}.vtt`; label: string };
};

export const media: {
  hero: ApprovedImage | null;
  gameplay: ApprovedGameplay | null;
} = { hero: null, gameplay: null };
