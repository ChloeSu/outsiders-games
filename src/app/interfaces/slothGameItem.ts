export interface slothGameItem {
  correspondingImg: string,
  position: { top: number, left: number },
  isShown?: boolean
}

export enum pageStages {
  desc1 = 0,
  desc2 = 1,
  gaming = 2,
  end1 = 3,
  end2 = 4
}

export const stageImgMap = [
  { stage: pageStages.desc1 , img: "/assets/images/sloth-game/desc1.png" },
  { stage: pageStages.desc2 , img: "/assets/images/sloth-game/desc2.png" },
  { stage: pageStages.gaming , img: "" },
  { stage: pageStages.end1 , img: "/assets/images/sloth-game/end1.png" },
  { stage: pageStages.end2 , img: "/assets/images/sloth-game/end2.png" },
];

let positions = [
  {top: 50, left: 350},
  {top: 50, left: 180},
  {top: 120, left: 200},
  {top: 120, left: 60}];

export const items: slothGameItem[] = Array.from({ length: 4 }, (_, index) => ({
  correspondingImg: `/assets/images/sloth-game/${index + 1}.png`,
  position: positions[index]
}));

