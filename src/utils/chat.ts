import { Message } from "../components";
import { ChatListItemProps } from "../components/chatListItem/chatListItem.types";
import mock from "../mock";
import { ChatModel, MessageModel } from "../mock/mock.types";
import { getTime } from "./dateTime";
import userName from "./userName";

export function mapChatToChatListItemProps(chat: ChatModel): ChatListItemProps {
  const { unread_count, last_message } = chat;
  return {
    lastMessage: last_message,
    unreadCount: unread_count,
    formattedTime: getTime(last_message.time),
  };
}

export function mapChatToMessages(messages: MessageModel[]): Message[] {
  return messages.map(
    (msg) =>
      new Message({
        name: userName(msg.user),
        isCurrent: msg.user.login === mock.currentUser.login,
        content: msg.content,
        time: msg.time,
      })
  );
}
