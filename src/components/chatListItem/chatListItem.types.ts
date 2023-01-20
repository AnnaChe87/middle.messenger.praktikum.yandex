import { Props } from "../../index.types";
import { MessageModel } from "../../mock/mock.types";

export type ChatListItemProps = Props & {
  unreadCount: number;
  lastMessage: MessageModel;
  formattedTime: string;
  isSelected?: boolean;
};
