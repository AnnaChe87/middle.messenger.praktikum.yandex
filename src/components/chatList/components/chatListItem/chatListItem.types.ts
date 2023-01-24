import { Props } from "../../../../index.types";
import { MessageModel } from "../../../../mock/mock.types";

export type ChatListItemProps = Props & {
  id: number;
  title: string;
  unreadCount: number;
  lastMessage: MessageModel;
  formattedTime: string;
  isSelected?: boolean;
  hasUnread?: boolean;
};
