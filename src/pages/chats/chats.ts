import { Block } from "../../core";
import { ChatsProps } from "./chats.types";
import { mapChatToChatListItemProps, mapChatToMessages } from "./chats.utils";
import { Chat, ChatListItem, FormItem, Link } from "../../components";
import { data } from "../../mock";
import template from "./chats.hbs";

import "./chats.scss";

/**
 * Список чатов и лента переписки
 */
class Chats extends Block {
  constructor(props: ChatsProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const chats = new Chats({
  link: new Link({ href: "#/profile", title: "Профиль" }),
  chats: data.chats.map(
    (chat) => new ChatListItem(mapChatToChatListItemProps(chat))
  ),
  search: new FormItem({ name: "message", type: "search" }),
  currentChat: new Chat({
    title: data.chats[0].title,
    messages: mapChatToMessages(data.chat),
  }),
});
