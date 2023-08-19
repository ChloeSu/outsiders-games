export interface RabbitGameItem {
  img: string;
  positiveImg: string;
  negtiveImg: string;
  showPositive?: boolean;
}

export enum pageStages {
  desc1 = 0,
  desc2 = 1,
  start = 2,
  gaming = 3,
  end = 4
}

export const stageImgMap = [
  { stage: pageStages.desc1 , img: "/assets/images/rabbit-game/desc1.png" },
  { stage: pageStages.desc2 , img: "/assets/images/rabbit-game/desc2.png" },
  { stage: pageStages.start , img: "/assets/images/rabbit-game/start.png" },
  { stage: pageStages.gaming , img: "/assets/images/rabbit-game/rabbit.png" },
  { stage: pageStages.end , img: "/assets/images/rabbit-game/end.png" },
];

export const items: RabbitGameItem[] = Array.from({ length: 4 }, (_, index) => ({
  img: `/assets/images/rabbit-game/${index + 1}.png`,
  negtiveImg: `/assets/images/rabbit-game/${index + 1}-1.png`,
  positiveImg: `/assets/images/rabbit-game/${index + 1}-2.png`
}));

