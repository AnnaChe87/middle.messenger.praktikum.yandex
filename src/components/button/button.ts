import { Block } from "../../core";
import template from "./button.hbs";
import { ButtonProps } from "./button.types";

import "./button.scss";

/**
 * Кнопка
 */
export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
