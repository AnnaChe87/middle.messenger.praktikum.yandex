import { MessageModel } from "../../models/message.model";

export type ChatListItemProps = {
  title: string;
  unread_count: number;
  last_message: MessageModel;
};
