import { Props } from "../../index.types";
import { ChatListItem } from "./components";

export type ChatListProps = Props & {
  items: ChatListItem[];
};
