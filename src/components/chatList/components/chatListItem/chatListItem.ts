import { Actions, Block } from "../../../../core";
import { ChatListItemProps } from "./chatListItem.types";
import template from "./chatListItem.hbs";
import { EVENTS, Store } from "../../../../core/Store";

import "./chatListItem.scss";

/**
 * Чат в списке чатов
 */
export class ChatListItem extends Block<ChatListItemProps> {
  constructor(props: ChatListItemProps) {
    props.classname = ["chat-list-item"];
    props.hasAvatar = !!props.avatar;
    super(props);

    Store._instance.on(EVENTS.UPDATE_CURRENT_CHAT, () => this.toggleSelect());
  }

  render() {
    return this.compile(template, this.props);
  }

  toggleSelect() {
    if (Actions.getCurrentChat()?.id === this.props.id) {
      this.getContent().classList.add("selected");
    } else {
      this.getContent().classList.remove("selected");
    }
  }
}
