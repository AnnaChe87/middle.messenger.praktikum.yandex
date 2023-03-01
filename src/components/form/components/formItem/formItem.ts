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
  private _isFile: boolean;
  constructor(props: FormItemProps) {
    const { classname = [], label, value = "", ...inputProps } = props;
    const isFile = props.type === "file";

    super({
      classname: [...(classname || []), "form-item"],
      label,
      value,
      isFile,
      uploadLabel: "Выберите файл на компьютере",
      errors: new FormError({ text: "" }),
      input: new Input({ ...inputProps, value }),
    });
    this._isFile = isFile;
    this.initEvents();
  }

  initEvents() {
    if (this._isFile) {
      this.props.input.setProps({
        events: {
          change: (e: InputEvent) => this.inputFile(e),
        },
      });
    }
  }

  render() {
    return this.compile(template, this.props);
  }

  inputFile(e: InputEvent) {
    const value = (e?.target as HTMLInputElement).value;

    if (value) {
      this.setProps({ value: value.split("\\").pop() });
    } else {
      this.setProps({ value: undefined });
    }
  }
}
