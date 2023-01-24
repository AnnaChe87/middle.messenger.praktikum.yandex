import { Block } from "../../core";
import { ChatsProps } from "./chats.types";
import {
  Chat,
  ChatList,
  ChatListItem,
  FormItem,
  Link,
  mapChatToChatListItemProps,
  mapChatToMessages,
} from "../../components";
import { data } from "../../mock";
import template from "./chats.hbs";

import "./chats.scss";

/**
 * Список чатов и лента переписки
 */
class Chats extends Block {
  constructor(props: ChatsProps) {
    super({
      ...props,
      classname: ["chats"],
      link: new Link({ href: "#/profile", title: "Профиль" }),
      search: new FormItem({
        name: "message",
        type: "search",
        classname: ["single", "chats-navigation-search"],
        placeholder: "Поиск",
      }),
    });
    this.initEvents();
  }

  initEvents() {
    this.props.search.props.input.setProps({
      events: {
        input: (e: InputEvent) => {
          this.props.chatList.filterChats((e.target as HTMLInputElement).value);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const chats = new Chats({
  chatList: new ChatList({
    items: data.chats.map(
      (chat) => new ChatListItem(mapChatToChatListItemProps(chat))
    ),
  }),
  currentChat: new Chat({
    classname: ["chats-chat"],
    title: data.chats[0].title,
    messages: mapChatToMessages(data.chat),
  }),
});
