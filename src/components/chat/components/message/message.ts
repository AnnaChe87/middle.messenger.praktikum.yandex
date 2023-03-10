import { Block } from "../../../../core";
import { MessageProps } from "./message.types";
import template from "./message.hbs";

import "./message.scss";

/**
 * Сообщение в ленте переписки
 */
export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    props.classname = ["message", "column"];
    if (props.isCurrent) {
      props.classname.push("current");
    }
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
