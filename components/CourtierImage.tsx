import Image from "next/image";
import { cn } from "../lib/utils";

type CourtierImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
};

export function CourtierImage({
  src,
  alt,
  width,
  height,
  caption,
  className,
  priority,
  quality = 94,
}: CourtierImageProps) {
  return (
    <figure
      className={cn(
        "rounded-lg border border-soft bg-courtier-panel p-4 shadow-sm",
        "transition-transform duration-500 ease-out",
        className
      )}
    >
      <div className="overflow-hidden rounded-md">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={quality}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 600px"
          className="h-auto w-full animate-courtier-fade-in object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
