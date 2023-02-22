import { Block } from "../../core";
import { ChatsProps, FormDataType } from "./chats.types";
import {
  Button,
  Chat,
  ChatList,
  Form,
  FormItem,
  Link,
  Modal,
} from "../../components";
import template from "./chats.hbs";

import "./chats.scss";
import { chatsController } from "../../controllers/chats.controller";
import { DEFAULT_CHATS_PARAMS } from "../../api";

/**
 * Список чатов и лента переписки
 */
class Chats extends Block<ChatsProps> {
  constructor(props: ChatsProps) {
    super({
      ...props,
      classname: ["chats"],
      link: new Link({ href: "/profile", title: "Профиль" }),
      search: new FormItem({
        name: "message",
        type: "search",
        classname: ["single", "chats-navigation-search"],
        placeholder: "Поиск",
      }),
      btn: new Button({ classname: ["icon-btn"] }),
      addChatModal: new Modal({
        title: "Создание чата",
        content: new Form({
          controls: [new FormItem({ name: "title", label: "Название чата" })],
          btn: new Button({ title: "Создать", type: "submit" }),
          handleSubmit: (data: FormDataType) =>
            chatsController.createChat(data.title),
        }),
      }),
      currentChat: new Chat({}),
      chatList: new ChatList({}),
    });
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

    this.props.btn!.setProps({
      events: {
        click: () => this.props.addChatModal!.show(),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const chats = new Chats({});
