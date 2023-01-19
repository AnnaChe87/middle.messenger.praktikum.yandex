import Block from "../../core/Block";
import template from "./button.hbs";
import { ButtonProps } from "./button.types";

import "./button.scss";

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
