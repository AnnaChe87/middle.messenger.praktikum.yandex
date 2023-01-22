import { Block } from "../../core";
import { ChatProps } from "./chat.types";
import template from "./chat.hbs";

import "./chat.scss";
import { Button } from "../button";
import { FormItem } from "../formItem";
import { Form } from "../form";

/**
 * Лента переписки с формой ввода сообщения
 */
export class Chat extends Block {
  constructor(props: ChatProps) {
    super({
      ...props,
      classname: ["chat", "column"],
      attach: new Button({ classname: ["icon-btn"] }),
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
