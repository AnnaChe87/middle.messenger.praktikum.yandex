import { data, MessageModel } from "../../../../mock";
import { getUserName } from "../../../../utils";
import { Message } from "./message";

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
