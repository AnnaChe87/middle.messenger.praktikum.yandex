import { Actions, Block } from "../../core";
import { ChatListItem, mapChatToChatListItemProps } from "./components";
import { EVENTS, Store } from "../../core/Store";
import { chatsController } from "../../controllers";
import { Props } from "../../index.types";
import template from "./chatList.hbs";

import "./chatList.scss";

/**
 * Список чатов
 */
export class ChatList extends Block<Props> {
  constructor(props: Props) {
    chatsController.getChats();

    props.classname = ["chat-list"];
    super(props);

    Store._instance.on(EVENTS.UPDATE_CHATS, () => this._updateItems());
  }

  render() {
    return this.compile(template, this.props);
  }

  _updateItems() {
    this.setProps({
      items: Actions.getChats().map(
        (chat) =>
          new ChatListItem({
            ...mapChatToChatListItemProps(chat),
            events: {
              click: () => {
                chatsController.getTokenByChat(chat);
              },
            },
          })
      ),
    });
  }
}
