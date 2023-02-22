import { Actions, Block, ModalService } from "../../core";
import { ChatProps, FormDataType } from "./chat.types";
import { Button } from "../button";
import { FormItem } from "../form";
import { Form } from "../form";
import { DropdownButton } from "../dropdownButton";
import { Menu, MenuItem } from "../menu";
import { EVENTS, Store } from "../../core/Store";
import { Socket } from "../../core/Socket";
import { Message } from "./components";
import { onAddUser, onDeleteUser } from "./chat.utils";
import template from "./chat.hbs";

import "./chat.scss";

/**
 * Лента переписки с формой ввода сообщения
 */
export class Chat extends Block<ChatProps> {
  _socket: Socket;

  modalService: ModalService = ModalService.getInstance();
  constructor(props: ChatProps) {
    const store = new Store();
    super({
      ...props,
      classname: ["chat", "column", ...(props.classname || [])],
      menu: new DropdownButton({
        btn: new Button({ classname: ["icon-btn"] }),
        menu: new Menu({
          items: [
            new MenuItem({
              action: "add",
              title: "Добавить пользователя",
              events: {
                click: () => this.modalService.openModal(onAddUser()),
              },
            }),
            new MenuItem({
              action: "remove",
              title: "Удалить пользователя",
              events: {
                click: () => this.modalService.openModal(onDeleteUser()),
              },
            }),
          ],
          direction: ["bottom", "left"],
        }),
      }),
      attach: new DropdownButton({
        btn: new Button({ classname: ["icon-btn"] }),
        menu: new Menu({
          items: [
            new MenuItem({ action: "attach-content", title: "Фото/Видео" }),
            new MenuItem({ action: "attach-file", title: "Файл" }),
            new MenuItem({ action: "attach-location", title: "Геолокация" }),
          ],
          direction: ["top", "right"],
        }),
      }),
      form: new Form({
        classname: ["chat-footer-form"],
        controls: [
          new FormItem({
            name: "message",
            placeholder: "Сообщение",
            classname: ["single"],
          }),
        ],
        btn: new Button({ classname: ["icon-btn"], type: "submit" }),
        handleSubmit: (data: FormDataType) =>
          this._socket.message(data.message),
      }),
    });

    store.on(EVENTS.UPDATE_CURRENT_CHAT, () => this._initSocket());
    store.on(EVENTS.UPDATE_MESSAGES, () =>
      this.setProps({
        messages: Actions.getMessages().map((props) => new Message(props)),
      })
    );
  }

  _initSocket() {
    const socketInfo = Actions.getSocketInfo();
    if (!socketInfo) return;

    const { token, userId, chatId } = socketInfo;
    this._socket = new Socket(userId, chatId, token);
  }

  render() {
    return this.compile(template, this.props);
  }
}
