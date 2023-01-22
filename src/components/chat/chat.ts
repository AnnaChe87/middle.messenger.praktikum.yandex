import { Block } from "../../core";
import { ChatProps } from "./chat.types";
import template from "./chat.hbs";

import "./chat.scss";
import { Button } from "../button";
import { FormItem } from "../formItem";

/**
 * Лента переписки с формой ввода сообщения
 */
export class Chat extends Block {
  constructor(props: ChatProps) {
    props.classname = ["chat", "column"];
    props.attach = new Button({ classname: ["icon-btn"] });
    props.input = new FormItem({
      name: "message",
      placeholder: "Сообщение",
      classname: ["single"],
    });
    props.btn = new Button({ classname: ["icon-btn"], type: "submit" });

    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
