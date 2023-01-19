import { Block } from "../../core";
import { Button, FormItem, Link } from "../../components";
import { SigninProps } from "./signin.types";
import template from "./signin.hbs";

import "./signin.scss";

class Signin extends Block {
  constructor(props: SigninProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const signin = new Signin({
  controls: [
    new FormItem({ label: "Почта", name: "email" }),
    new FormItem({ label: "Логин", name: "login" }),
    new FormItem({ label: "Имя", name: "first_name" }),
    new FormItem({ label: "Фамилия", name: "second_name" }),
    new FormItem({ label: "Пароль", name: "password", type: "password" }),
    new FormItem({
      label: "Пароль(еще раз)",
      name: "confirm",
      type: "password",
    }),
    new FormItem({ label: "Телефон", name: "phone" }),
  ],
  btn: new Button({ title: "Зарегистрироваться", type: "submit" }),
  link: new Link({ href: "#/login", title: "Войти" }),
});
