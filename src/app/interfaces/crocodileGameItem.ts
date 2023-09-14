export interface crocodileGameItem {
  imgPath: string;
  isCorrectChoice: boolean;
  score: number;
  isClicked?: boolean;
  clickedImgPath: string;
}

export enum pageStages {
  desc1 = 0,
  desc2 = 1,
  gaming = 2,
  end = 3
}

export const stageImgMap = [
  { stage: pageStages.desc1 , img: "/assets/images/crocodile-game/desc1.png" },
  { stage: pageStages.desc2 , img: "/assets/images/crocodile-game/desc2.png" },
  { stage: pageStages.gaming , img: "/assets/images/crocodile-game/crocodile.png" },
  { stage: pageStages.end , img: "/assets/images/crocodile-game/end.png" },
];

export const sampleMessages: crocodileGameItem[] = Array.from({ length: 6 }, (_, index) => ({
  imgPath: `/assets/images/crocodile-game/bubble${index + 1}.png`,
  isCorrectChoice: index > 0 && index < 5,
  score: index > 0 && index < 5 ? 25 : 0,
  clickedImgPath: `/assets/images/crocodile-game/bubble${index + 1}Clicked.png`,
}));
