import { Block, ModalService } from "../../core";
import { ChatProps } from "./chat.types";
import { Button } from "../button";
import { FormItem } from "../form";
import { Form } from "../form";
import { DropdownButton } from "../dropdownButton";
import { Menu, MenuItem } from "../menu";
import { onAddUser, onDeleteUser } from "./chat.utils";
import template from "./chat.hbs";

import "./chat.scss";

/**
 * Лента переписки с формой ввода сообщения
 */
export class Chat extends Block<ChatProps> {
  modalService: ModalService = ModalService.getInstance();
  constructor(props: ChatProps) {
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
      }),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
