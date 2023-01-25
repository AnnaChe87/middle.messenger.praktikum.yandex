import { Block } from "../../core";
import { data } from "../../mock";
import { ChatListProps } from "./chatList.types";
import { ChatListItem, mapChatToChatListItemProps } from "./components";
import template from "./chatList.hbs";

import "./chatList.scss";

/**
 * Список чатов
 */
export class ChatList extends Block {
  constructor(props: ChatListProps) {
    props.classname = ["chat-list"];
    super(props);
    this.initEvents();
  }

  render() {
    return this.compile(template, this.props);
  }

  initEvents() {
    this.props.items.forEach((chat: ChatListItem) =>
      chat.setProps({ events: { click: () => this.selectChat(chat.props.id) } })
    );
  }

  filterChats(value?: string) {
    const newChats =
      value && value.length > 0
        ? data.chats.filter((chat) => chat.title.indexOf(value) !== -1)
        : data.chats;
    this.setProps({
      items: newChats.map(
        (chat) => new ChatListItem(mapChatToChatListItemProps(chat))
      ),
    });
  }

  selectChat(id: number) {
    this.props.items.forEach((chat: ChatListItem) => {
      if (chat.props.id !== id) {
        chat.deselect();
      }
      if (chat.props.id === id) {
        chat.select();
      }
    });
  }
}
