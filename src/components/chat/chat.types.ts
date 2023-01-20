import { Props } from "../../index.types";
import { Message } from "../message/message";

export type ChatProps = Props & {
  title: string;
  messages: Message[];
};
