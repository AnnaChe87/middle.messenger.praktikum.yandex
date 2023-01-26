import { Props } from "../../../../index.types";

export type MessageProps = Props & {
  name: string;
  time: string;
  content: string;
  isCurrent: boolean;
};
