import { Block } from "../../core";
import { ChatListItemProps } from "./chatListItem.types";
import template from "./chatListItem.hbs";

import "./chatListItem.scss";

/**
 * Чат в списке чатов
 */
export class ChatListItem extends Block {
  constructor(props: ChatListItemProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
