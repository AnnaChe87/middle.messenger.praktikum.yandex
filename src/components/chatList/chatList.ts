import { Actions, Block } from "../../core";
import { ChatListItem, mapChatToChatListItemProps } from "./components";
import template from "./chatList.hbs";

import "./chatList.scss";
import { EVENTS, Store } from "../../core/Store";
import { chatsController } from "../../controllers/chats.controller";
import { Props } from "../../index.types";

/**
 * Список чатов
 */
export class ChatList extends Block<Props> {
  constructor(props: Props) {
    const store = new Store();
    chatsController.getChats();

    props.classname = ["chat-list"];
    super(props);

    store.on(EVENTS.UPDATE_CHATS, () => this._updateItems());
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
              click: () => chatsController.getTokenByChatId(chat.id),
            },
          })
      ),
    });
  }

  // filterChats(value?: string) {
  //   const newChats =
  //     value && value.length > 0
  //       ? data.chats.filter((chat) => chat.title.indexOf(value) !== -1)
  //       : data.chats;
  //   this.setProps({
  //     items: newChats.map(
  //       (chat) => new ChatListItem(mapChatToChatListItemProps(chat))
  //     ),
  //   });
  // }
}
