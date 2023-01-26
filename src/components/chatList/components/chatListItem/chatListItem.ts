import { Block } from "../../../../core";
import { ChatListItemProps } from "./chatListItem.types";
import template from "./chatListItem.hbs";

import "./chatListItem.scss";

/**
 * Чат в списке чатов
 */
export class ChatListItem extends Block<ChatListItemProps> {
  constructor(props: ChatListItemProps) {
    props.classname = ["chat-list-item"];
    props.hasUnread = props.unreadCount > 0;
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }

  select() {
    this.getContent().classList.add("selected");
  }

  deselect() {
    this.getContent().classList.remove("selected");
  }
}
