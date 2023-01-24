import { Chat, ChatList, FormItem, Link } from "../../components";
import { Props } from "../../index.types";

export type ChatsProps = Props & {
  chatList: ChatList;
  currentChat: Chat;
  link?: Link;
  search?: FormItem;
};
