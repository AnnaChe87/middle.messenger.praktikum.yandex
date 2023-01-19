import { ChatListItem, FormItem, Link } from "../../components";
import { Props } from "../../index.types";

export type ChatsProps = Props & {
  link: Link;
  chats: ChatListItem[];
  search: FormItem;
};
