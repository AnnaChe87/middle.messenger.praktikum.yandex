import { Block } from "../../core";
import template from "./button.hbs";
import { ButtonProps } from "./button.types";

import "./button.scss";

/**
 * Кнопка
 */
export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    props.classname = [...(props.classname || []), "button"];
    super(props, "button");
  }

  render() {
    return this.compile(template, this.props);
  }

  _addAttributes(): void {
    super._addAttributes();
    this.element.setAttribute("type", this.props.type || "button");
  }
}
