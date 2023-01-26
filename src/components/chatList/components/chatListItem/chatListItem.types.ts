import { Props } from "../../../../index.types";
import { MessageModel } from "../../../../mock";

export type ChatListItemProps = Props & {
  id: number;
  title: string;
  lastMessage: MessageModel;
  formattedTime: string;
  unreadCount?: number;
  isSelected?: boolean;
};
