export interface MeerkatGameItem {
  item: string;
  isFixed?: boolean;
}

export enum pageStages {
  desc1 = 0,
  desc2 = 1,
  gaming = 2,
  gameOver = 3,
  end = 4
}

export const stageImgMap = [
  { stage: pageStages.desc1 , img: "/assets/images/meerkat-game/desc1.png" },
  { stage: pageStages.desc2 , img: "/assets/images/meerkat-game/desc2.png" },
  { stage: pageStages.gaming , img: "/assets/images/meerkat-game/start.png" },
  { stage: pageStages.gameOver , img: "/assets/images/meerkat-game/complete.png" },
  { stage: pageStages.end , img: "/assets/images/meerkat-game/end.png" },
];

export const items: MeerkatGameItem[] = Array.from({ length: 5 }, (_, index) => ({
  item: `/assets/images/meerkat-game/${index + 1}.png`
}));

