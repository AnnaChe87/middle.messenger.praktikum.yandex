import { Block } from "../../core";
import { ChatsProps } from "./chats.types";
import { Chat, ChatListItem, FormItem, Link } from "../../components";

import template from "./chats.hbs";

import "./chats.scss";
import {
  mapChatToChatListItemProps,
  mapChatToMessages,
} from "../../utils/chat";
import mock from "../../mock";

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
  chats: mock.chats.map(
    (chat) => new ChatListItem(mapChatToChatListItemProps(chat))
  ),
  search: new FormItem({ name: "message", type: "search" }),
  currentChat: new Chat({
    title: mock.chats[0].title,
    messages: mapChatToMessages(mock.chat),
  }),
});
