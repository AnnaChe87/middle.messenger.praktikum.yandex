import { Block } from "../../core";
import { ChatProps } from "./chat.types";
import template from "./chat.hbs";

import "./chat.scss";

/**
 * Лента переписки с формой ввода сообщения
 */
export class Chat extends Block {
  constructor(props: ChatProps) {
    props.classname = ["chat", "column"];
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
