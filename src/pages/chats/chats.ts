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
    props.classname = ["chats"];
    super(props);
    this.props.chats.forEach((chat: ChatListItem) =>
      chat.setProps({ events: { click: () => this.selectChat(chat.props.id) } })
    );
  }

  render() {
    return this.compile(template, this.props);
  }

  selectChat(id: number) {
    this.props.chats.forEach((chat: ChatListItem) => {
      if (chat.props.id !== id) {
        chat.deselect();
      }
      if (chat.props.id === id) {
        chat.select();
      }
    });
  }
}

export const chats = new Chats({
  link: new Link({ href: "#/profile", title: "Профиль" }),
  chats: data.chats.map(
    (chat) => new ChatListItem(mapChatToChatListItemProps(chat))
  ),
  search: new FormItem({
    name: "message",
    type: "search",
    classname: ["single"],
    placeholder: "Поиск",
  }),
  currentChat: new Chat({
    title: data.chats[0].title,
    messages: mapChatToMessages(data.chat),
  }),
});
