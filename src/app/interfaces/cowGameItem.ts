export enum pageStages {
  desc1 = 0,
  desc2 = 1,
  gaming = 2,
  end = 3
}

export const stageImgMap = [
  { stage: pageStages.desc1 , img: "/assets/images/cow-game/desc1.png" },
  { stage: pageStages.desc2 , img: "/assets/images/cow-game/desc2.png" },
  { stage: pageStages.gaming , img: "" },
  { stage: pageStages.end , img: "/assets/images/cow-game/end.png" },
];

