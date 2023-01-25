import { Block } from "../../../../core";
import { FormErrorProps } from "./formError.types";
import template from "./formError.hbs";

import "./formError.scss";

/**
 * Ошибка валидации на форме
 */
export class FormError extends Block {
  constructor(props: FormErrorProps) {
    props.classname = ["form-error"];
    super(props, "p");
  }

  render() {
    return this.compile(template, this.props);
  }
}
