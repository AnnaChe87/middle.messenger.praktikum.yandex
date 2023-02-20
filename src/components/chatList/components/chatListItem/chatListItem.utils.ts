import { ChatResponseContract } from "../../../../api";
import { getTime } from "../../../../utils";
import { ChatListItemProps } from "./chatListItem.types";

export function mapChatToChatListItemProps(
  chat: ChatResponseContract
): ChatListItemProps {
  const { id, unread_count, last_message, title } = chat;
  return {
    id,
    title,
    lastMessage: last_message,
    unreadCount: unread_count,
    formattedTime: getTime(last_message?.time),
  };
}
