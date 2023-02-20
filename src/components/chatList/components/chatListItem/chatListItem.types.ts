import { LastMessageResponseContract } from "../../../../api";
import { Props } from "../../../../index.types";

export type ChatListItemProps = Props & {
  id: number;
  title: string;
  unreadCount: number;
  lastMessage: LastMessageResponseContract;
  formattedTime: string;
  hasUnread?: boolean;
};
