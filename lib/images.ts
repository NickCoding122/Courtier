export type CourtierImageMeta = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const courtierImages: Record<string, CourtierImageMeta> = {
  heroCourtAction: {
    src: "/images/courtier/courtier-hero-court-action.png",
    width: 1587,
    height: 656,
    alt: "Courtier player in motion on an indoor court",
  },
  heroRacket: {
    src: "/images/courtier/courtier-hero-racket.png",
    width: 1670,
    height: 1039,
    alt: "Courtier padel racket portrait on a monochrome background",
  },
  indoorCourt: {
    src: "/images/courtier/courtier-indoor-court.png",
    width: 1670,
    height: 1044,
    alt: "Atmospheric view of Courtier's indoor court",
  },
  merchBottle: {
    src: "/images/courtier/courtier-merch-bottle.png",
    width: 782,
    height: 834,
    alt: "Courtier branded stainless bottle",
  },
  merchCap: {
    src: "/images/courtier/courtier-merch-cap.png",
    width: 782,
    height: 835,
    alt: "Courtier monochrome cap",
  },
  merchHoodie: {
    src: "/images/courtier/courtier-merch-hoodie-roundel.png",
    width: 785,
    height: 834,
    alt: "Courtier hoodie with roundel detail",
  },
  merchTote: {
    src: "/images/courtier/courtier-merch-tote.png",
    width: 776,
    height: 837,
    alt: "Courtier tote bag",
  },
  padelRacketRoundel: {
    src: "/images/courtier/courtier-padel-racket-roundel.png",
    width: 782,
    height: 834,
    alt: "Courtier padel racket with roundel",
  },
  roundelSignage: {
    src: "/images/courtier/courtier-roundel-signage.png",
    width: 776,
    height: 837,
    alt: "Courtier roundel signage on facade",
  },
};
