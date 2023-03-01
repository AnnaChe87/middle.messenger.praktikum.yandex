import { Block, EVENTS, ModalService, Store } from "../../core";
import { ChatsProps } from "./chats.types";
import { Button, Chat, ChatList, FormItem, Link } from "../../components";
import { chatsController } from "../../controllers";
import { DEFAULT_CHATS_PARAMS } from "../../api";
import { onAddChat } from "./chats.utils";
import template from "./chats.hbs";

import "./chats.scss";
import { ROUTE_NAMES } from "../../routing";

/**
 * Список чатов и лента переписки
 */
class Chats extends Block<ChatsProps> {
  modalService: ModalService = ModalService.getInstance();

  constructor(props: ChatsProps) {
    super({
      ...props,
      classname: ["chats"],
      link: new Link({ href: ROUTE_NAMES.SETTINGS, title: "Профиль" }),
      search: new FormItem({
        name: "message",
        type: "search",
        classname: ["single", "chats-navigation-search"],
        placeholder: "Поиск",
      }),
      btn: new Button({
        classname: ["icon-btn"],
        events: {
          click: () =>
            this.modalService.openModal(
              onAddChat(() => this.modalService.closeModal())
            ),
        },
      }),
      chatList: new ChatList({}),
    });

    Store._instance.on(EVENTS.UPDATE_CURRENT_CHAT, () =>
      this.setProps({ currentChat: new Chat({}) })
    );
    this.initEvents();
  }

  initEvents() {
    this.props.search!.props.input.setProps({
      events: {
        input: (e: InputEvent) => {
          chatsController.getChats({
            ...DEFAULT_CHATS_PARAMS,
            title: (e.target as HTMLInputElement).value,
          });
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const chats = new Chats({});
