import { Block } from "../../core";
import { LoginProps } from "./login.types";
import { Button, FormItem, Link } from "../../components";
import template from "./login.hbs";

import "./login.scss";

class Login extends Block {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const login = new Login({
  btn: new Button({
    title: "Войти",
    type: "submit",
  }),
  link: new Link({ href: "#/signin", title: "Нет аккаунта?" }),
  controls: [
    new FormItem({ label: "Логин", name: "login" }),
    new FormItem({ label: "Пароль", name: "password", type: "password" }),
  ],
});
