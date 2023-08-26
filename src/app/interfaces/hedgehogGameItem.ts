export interface HedgehogGameItem {
  item: string;
  desc: string;
  isHidden?: boolean;
}

export enum pageStages {
  desc1 = 0,
  desc2 = 1,
  gaming = 2,
  end = 3
}

export const stageImgMap = [
  { stage: pageStages.desc1 , img: "/assets/images/hedgehog-game/desc1.png" },
  { stage: pageStages.desc2 , img: "/assets/images/hedgehog-game/desc2.png" },
  { stage: pageStages.gaming , img: "/assets/images/hedgehog-game/hedgehog.png" },
  { stage: pageStages.end , img: "/assets/images/hedgehog-game/end.png" },
];

export const items: HedgehogGameItem[] = Array.from({ length: 6 }, (_, index) => ({
  item: index > 0 && index < 5 ? `/assets/images/hedgehog-game/${index}.png`: '',
  desc: `/assets/images/hedgehog-game/${index}-desc.png`,
  isHidden: index == 0 || index == 5
}));

