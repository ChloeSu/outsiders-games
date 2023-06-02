export interface Message {
  userSend?: boolean;
  text: string;
  waitForChoice: boolean;
  score?: number
}
