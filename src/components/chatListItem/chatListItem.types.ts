import { Props } from "../../index.types";
import { MessageModel } from "../../mock/mock.types";

export type ChatListItemProps = Props & {
  id: number;
  unreadCount: number;
  lastMessage: MessageModel;
  formattedTime: string;
  isSelected?: boolean;
};
