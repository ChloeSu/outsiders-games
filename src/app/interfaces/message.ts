export interface Message {
  userSend?: boolean;
  text: string;
  waitForChoice: boolean;
  score?: number
}

export const sampleMessages: Message[] = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing (show option)',
    waitForChoice: true
  },
  {
    text: 'Nullam consequat ultricies dui, eget sollicitudin enim pellentesque eget.',
    waitForChoice: false
  },
  {
    text: 'Fusce varius risus id libero tristique, eget euismod justo mattis. (show option)',
    waitForChoice: true
  },
  {
    text: 'In hac habitasse platea dictumst. Quisque venenatis nunc id mi fringilla, ac consectetur lacus facilisis. ',
    waitForChoice: false
  },
  {
    text: 'Curabitur in luctus arcu. Nunc fringilla odio nec tempor consequat. (show option)',
    waitForChoice: true
  },
  {
    text: 'Curabitur ullamcorper, ligula et aliquet tristique, massa velit aliquam urna, ac cursus nulla nisl sit amet nunc. (show option)',
    waitForChoice: true
  }
];
