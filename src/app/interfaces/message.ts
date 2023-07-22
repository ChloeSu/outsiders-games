export interface Message {
  text: string;
  isCorrectChoice: boolean;
  score: number;
  isClicked?: boolean;
}

export const sampleMessages: Message[] = [
  {
    text: '好話A',
    isCorrectChoice: true,
    score: 25
  },
  {
    text: '好話B',
    isCorrectChoice: true,
    score: 25
  },
  {
    text: '好話C',
    isCorrectChoice: true,
    score: 25
  },
  {
    text: '好話D',
    isCorrectChoice: true,
    score: 25
  },
  {
    text: '壞話A',
    isCorrectChoice: false,
    score: 0
  },
  {
    text: '壞話B',
    isCorrectChoice: false,
    score: 0
  },
  {
    text: '壞話C',
    isCorrectChoice: false,
    score: 0
  },
  {
    text: '壞話D',
    isCorrectChoice: false,
    score: 0
  },
];
