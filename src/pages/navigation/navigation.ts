import { Block } from "../../core";
import { Link } from "../../components";
import { NavigationProps } from "./navigation.types";
import template from "./navigation.hbs";

/**
 * Навигация по страницам
 */
class Navigation extends Block<NavigationProps> {
  constructor(props: NavigationProps) {
    props.classname = ["column"];
    super(props, "nav");
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const navigation = new Navigation({
  links: [
    new Link({ href: "#/login", title: "Авторизация" }),
    new Link({ href: "#/signin", title: "Регистрация" }),
    new Link({ href: "#/chats", title: "Чат" }),
    new Link({ href: "#/profile", title: "Профиль" }),
    new Link({ href: "#/profile-edit", title: "Профиль. Изменить данные" }),
    new Link({ href: "#/profile-pass", title: "Профиль. Изменить пароль" }),
    new Link({ href: "#/404", title: "404" }),
    new Link({ href: "#/500", title: "500" }),
  ],
});
