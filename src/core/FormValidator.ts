import { Form, FormItem } from "../components";

type Rule = {
  regExp: RegExp;
  error: string;
};

const rules: Record<string, Rule> = {
  login: {
    regExp: /^(?!\d+$)^[\w-]{3,20}$/i,
    error:
      "от 3 до 20 символов, допустимы латинские буквы, цифры, дефис, подчеркивания ",
  },
  password: {
    regExp: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40})$/,
    error: "от 8 до 40 символов, хотя бы одна заглавная буква и цифра",
  },
  first_name: {
    regExp: /^[A-ZА-Я][A-Za-zА-Яа-яЁё-]*$/,
    error: "первая буква обязательно заглавная, допустимы буквы, цифры, дефис",
  },
  second_name: {
    regExp: /^[A-ZА-Я][A-Za-zА-Яа-яЁё-]*$/,
    error: "первая буква обязательно заглавная, допустимы буквы, цифры, дефис",
  },
  email: {
    regExp: /^\w*@\w+\.[a-z]{2,6}$/,
    error: "допустим только формат электронной почты",
  },
  phone: {
    regExp: /^(?=.{10,15}$)^\+?\d*$/,
    error:
      'от 10 до 15 символов, допустимы цифры, первый символ может быть "+"',
  },
  message: {
    regExp: /^.+$/,
    error: "не может быть пустым",
  },
};

export class FormValidator {
  form: Form;
  _formItems: Record<string, FormItem> = {};

  constructor(form: Form) {
    this.form = form;
    this.init();
  }

  init() {
    this.form.props.controls.forEach((ctrl: FormItem) => {
      const input = ctrl.props.input;
      const name = input.props.name;
      input.setProps({
        events: {
          focus: () => this.isValidFieldValue(name),
          blur: () => this.isValidFieldValue(name),
        },
      });
      this._formItems[name] = ctrl;
    });
  }

  isValidForm = (): boolean => {
    let isValid = true;

    Object.keys(this._formItems).forEach((key) => {
      if (!this.isValidFieldValue(key)) {
        isValid = false;
      }
    });
    return isValid;
  };

  isValidFieldValue(fieldName: string): boolean {
    const { input, errors } = this._formItems[fieldName].props;
    const { regExp, error } = rules[fieldName] || {};
    if (!regExp || !errors) {
      return true;
    }
    const value = (input.getContent() as HTMLInputElement).value;
    if (!regExp.test(value)) {
      errors.setProps({ text: error });
      return false;
    }
    errors.setProps({ text: "" });
    return true;
  }
}
