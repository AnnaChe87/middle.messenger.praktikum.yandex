import { Block } from "../../core";
import { EntryProps } from "./entry.types";
import template from "./entry.hbs";

import "./entry.scss";
import { Button, Form, FormItem, Link } from "../../components";

/**
 * Авторизация/регистрация
 */
class Entry extends Block {
  constructor(props: EntryProps) {
    props.classname = ["entry"];
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const signin = new Entry({
  title: "Регистрация",
  form: new Form({
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
  }),
  link: new Link({ href: "#/login", title: "Войти" }),
});

export const login = new Entry({
  title: "Вход",
  form: new Form({
    controls: [
      new FormItem({ label: "Логин", name: "login" }),
      new FormItem({ label: "Пароль", name: "password", type: "password" }),
    ],
    btn: new Button({
      title: "Войти",
      type: "submit",
    }),
  }),
  link: new Link({ href: "#/signin", title: "Нет аккаунта?" }),
});
