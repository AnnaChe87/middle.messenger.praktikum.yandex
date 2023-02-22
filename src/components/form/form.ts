import { Block, FormValidator } from "../../core";
import { FormProps } from "./form.types";
import template from "./form.hbs";

/**
 * Форма
 */
export class Form extends Block<FormProps> {
  _formValidator: FormValidator;
  constructor(props: FormProps) {
    super(props, "form");
    this._formValidator = new FormValidator(this);
    this.setProps({
      events: {
        submit: (e: SubmitEvent) => {
          e?.preventDefault();
          if (this._formValidator.isValidForm()) {
            this.props.handleSubmit?.(this.getValues());
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }

  getValues(): FormData | Record<string, string> {
    const avatarCtrl = this.getContent().querySelector(
      "[name='avatar']"
    ) as HTMLInputElement;
    if (avatarCtrl && avatarCtrl.files) {
      const formData: FormData = new FormData();
      formData.append(avatarCtrl.name, avatarCtrl.files[0]);
      return formData;
    }

    const controls = this.getContent().querySelectorAll("[name]");

    const values: Record<string, string> = {};
    controls.forEach((ctrl: HTMLInputElement) => {
      values[ctrl.name] = ctrl.value;
    });

    return values;
  }
}
