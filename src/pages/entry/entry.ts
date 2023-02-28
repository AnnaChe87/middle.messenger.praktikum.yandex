import { Actions, Block, EVENTS, Store } from "../../core";
import { Button, Form, FormItem, Link } from "../../components";
import { EntryProps } from "./entry.types";
import { authController, chatsController } from "../../controllers";
import template from "./entry.hbs";
import { router } from "../..";
import { ROUTE_NAMES } from "../../routing";

import "./entry.scss";

/**
 * Авторизация/регистрация
 */
export class Entry extends Block<EntryProps> {
  constructor(props: EntryProps) {
    const store = new Store();

    if (!Actions.getProfile()?.id) {
      authController.getUser();
    }

    props.classname = ["entry"];
    super(props);

    store.on(EVENTS.UPDATE_PROFILE, () => {
      chatsController.getChats();
      router.go(ROUTE_NAMES.CHATS);
    });
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
    handleSubmit: authController.signup,
  }),
  link: new Link({ href: "/login", title: "Войти" }),
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
    handleSubmit: authController.signin,
  }),
  link: new Link({ href: "/signin", title: "Нет аккаунта?" }),
});
