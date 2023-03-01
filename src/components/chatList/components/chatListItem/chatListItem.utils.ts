import { ChatResponseContract } from "../../../../api";
import { getImgSrc, getTime } from "../../../../utils";
import { ChatListItemProps } from "./chatListItem.types";

export function mapChatToChatListItemProps(
  chat: ChatResponseContract
): ChatListItemProps {
  const { id, unread_count, last_message, title, avatar } = chat;

  return {
    id,
    title,
    avatar: avatar && getImgSrc(avatar),
    lastMessage: last_message,
    unreadCount: unread_count,
    formattedTime: getTime(last_message?.time),
  };
}
