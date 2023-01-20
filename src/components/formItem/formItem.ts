import { Block } from "../../core";
import { FormItemProps } from "./formItem.types";
import template from "./formItem.hbs";

import "./formItem.scss";

/**
 * Поле формы
 */
export class FormItem extends Block {
  constructor(props: FormItemProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
