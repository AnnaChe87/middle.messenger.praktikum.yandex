import { Block } from "../../core";
import { ChatProps } from "./chat.types";
import template from "./chat.hbs";

import "./chat.scss";

export class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
