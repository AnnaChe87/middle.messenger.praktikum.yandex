import { Block } from "../../../../core";
import { Input } from "../../../input";
import { FormError } from "../formError/formError";
import { FormItemProps } from "./formItem.types";
import template from "./formItem.hbs";

import "./formItem.scss";

/**
 * Поле формы
 */
export class FormItem extends Block<FormItemProps> {
  constructor({ classname, label, ...props }: FormItemProps) {
    super({
      classname: [...(classname || []), "form-item"],
      label,
      errors: new FormError({ text: "" }),
      input: new Input(props),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
