import { Block } from "../../core";
import { Button, Link } from "../../components";
import { data } from "../../mock";
import { getControls } from "./profile.utils";
import { ProfileProps } from "./profile.types";
import template from "./profile.hbs";

import "./profile.scss";

/**
 * Настройки пользователя
 */
class Profile extends Block {
  constructor(props: ProfileProps) {
    props.displayName = data.currentUser.display_name;
    props.classname = "profile";
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const profile = new Profile({
  links: [
    new Link({ href: "#/profile-edit", title: "Изменить данные" }),
    new Link({ href: "#/profile-pass", title: "Изменить пароль" }),
    new Link({ href: "#", title: "Выйти", color: "red" }),
  ],
  controls: getControls(),
});

export const profileEdit = new Profile({
  controls: getControls(true),
  btn: new Button({ title: "Сохранить", type: "submit" }),
});

export const profilePass = new Profile({
  controls: getControls(true, true),
  btn: new Button({ title: "Сохранить", type: "submit" }),
});
