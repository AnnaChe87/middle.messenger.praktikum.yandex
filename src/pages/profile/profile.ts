import { Block } from "../../core";
import { Avatar, Button, Form, Link } from "../../components";
import { data } from "../../mock";
import { getControls } from "./profile.utils";
import { ProfileProps } from "./profile.types";
import template from "./profile.hbs";

import "./profile.scss";

/**
 * Настройки пользователя
 */
class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super({
      ...props,
      classname: ["profile"],
      displayName: data.currentUser.display_name,
      avatar: new Avatar({}),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const profile = new Profile({
  links: [
    new Link({ href: "/profile-edit", title: "Изменить данные" }),
    new Link({ href: "/profile-pass", title: "Изменить пароль" }),
    new Link({ href: "", title: "Выйти", color: "red" }),
  ],
  form: new Form({
    controls: getControls(),
  }),
});

export const profileEdit = new Profile({
  form: new Form({
    controls: getControls(true),
    btn: new Button({ title: "Сохранить", type: "submit" }),
  }),
});

export const profilePass = new Profile({
  form: new Form({
    controls: getControls(true, true),
    btn: new Button({ title: "Сохранить", type: "submit" }),
  }),
});
