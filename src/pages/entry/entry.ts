import { Block } from "../../core";
import { EntryProps } from "./entry.types";
import template from "./entry.hbs";

import "./entry.scss";
import { Button, FormItem, Link } from "../../components";

/**
 * Авторизация/регистрация
 */
class Entry extends Block {
  constructor(props: EntryProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const signin = new Entry({
  title: "Регистрация",
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

export const login = new Entry({
  title: "Вход",
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