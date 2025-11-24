import Image from "next/image";

const courtierImages = {
  heroCourtAction: { src: "/images/courtier/courtier-hero-court-action.png", width: 1587, height: 656 },
  heroRacket: { src: "/images/courtier/courtier-hero-racket.png", width: 1670, height: 1039 },
  indoorCourt: { src: "/images/courtier/courtier-indoor-court.png", width: 1670, height: 1044 },
  merchBottle: { src: "/images/courtier/courtier-merch-bottle.png", width: 782, height: 834 },
  merchCap: { src: "/images/courtier/courtier-merch-cap.png", width: 782, height: 835 },
  merchHoodie: { src: "/images/courtier/courtier-merch-hoodie-roundel.png", width: 785, height: 834 },
  merchTote: { src: "/images/courtier/courtier-merch-tote.png", width: 776, height: 837 },
  padelRacketRoundel: { src: "/images/courtier/courtier-padel-racket-roundel.png", width: 782, height: 834 },
  roundelSignage: { src: "/images/courtier/courtier-roundel-signage.png", width: 776, height: 837 },
} as const;

type CourtierImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  caption?: string;
};

type CourtierImageRecord = typeof courtierImages;

type PresetKey = keyof CourtierImageRecord;

const resolvePreset = (
  source: string
): CourtierImageRecord[keyof CourtierImageRecord] | undefined => {
  return (courtierImages as Record<string, CourtierImageRecord[keyof CourtierImageRecord]>)[source];
};

export function CourtierImage({
  src,
  alt,
  width,
  height,
  priority,
  className,
  caption,
}: CourtierImageProps) {
  const preset = resolvePreset(src as PresetKey);
  const computedWidth = width ?? preset?.width ?? 1200;
  const computedHeight = height ?? preset?.height ?? 800;
  const sizes = `(max-width: 768px) 90vw, (max-width: 1280px) 60vw, ${computedWidth}px`;

  return (
    <figure
      className={[
        "courtier-image-frame",
        "relative isolate max-w-full rounded-lg border border-[rgba(160,160,160,0.15)] bg-[var(--courtier-off-black)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)]",
        "transition-transform duration-500 ease-out",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="courtier-image-surface relative overflow-hidden rounded-md bg-[var(--courtier-anthracite)]">
        <Image
          src={preset?.src ?? src}
          alt={alt}
          width={computedWidth}
          height={computedHeight}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full animate-courtier-fade-in object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="courtier-image-caption mt-4 text-[13px] leading-relaxed text-[var(--courtier-ash)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export { courtierImages };
