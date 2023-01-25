import { Block } from "../../core";
import { ChatProps } from "./chat.types";
import template from "./chat.hbs";

import "./chat.scss";
import { Button } from "../button";
import { FormItem } from "../form";
import { Form } from "../form";
import { DropdownButton } from "../dropdownButton";
import { Menu, MenuItem } from "../menu";

/**
 * Лента переписки с формой ввода сообщения
 */
export class Chat extends Block {
  constructor(props: ChatProps) {
    super({
      ...props,
      classname: ["chat", "column", ...(props.classname || [])],
      menu: new DropdownButton({
        btn: new Button({ classname: ["icon-btn"] }),
        menu: new Menu({
          items: [
            new MenuItem({ action: "add", title: "Добавить пользователя" }),
            new MenuItem({ action: "remove", title: "Удалить пользователя" }),
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
