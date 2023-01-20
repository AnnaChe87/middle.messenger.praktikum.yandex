import { Message } from "../../components";
import { ChatListItemProps } from "../../components/chatListItem/chatListItem.types";
import { data, ChatModel, MessageModel } from "../../mock";
import { getTime } from "../../utils/dateTime";
import { getUserName } from "../../utils/user";

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
        name: getUserName(msg.user),
        isCurrent: msg.user.login === data.currentUser.login,
        content: msg.content,
        time: msg.time,
      })
  );
}
