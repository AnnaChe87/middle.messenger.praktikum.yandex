import { Actions, Block } from "../../core";
import { Avatar, Button, Form, Link } from "../../components";
import { getControls } from "./profile.utils";
import { ProfileProps } from "./profile.types";
import template from "./profile.hbs";
import { authController } from "../../controllers";

import "./profile.scss";

/**
 * Настройки пользователя
 */
class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super({
      ...props,
      classname: ["profile"],
      displayName: Actions.getProfile()?.display_name,
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
    new Link({
      href: "#",
      title: "Выйти",
      color: "red",
      events: {
        click: (e) => {
          e?.preventDefault();
          authController.logout();
        },
      },
    }),
  ],
  form: new Form({
    controls: getControls({ user: Actions.getProfile() }),
  }),
});

export const profileEdit = new Profile({
  form: new Form({
    controls: getControls({ isEdit: true, user: Actions.getProfile() }),
    btn: new Button({ title: "Сохранить", type: "submit" }),
  }),
});

export const profilePass = new Profile({
  form: new Form({
    controls: getControls({
      isEdit: true,
      isPassword: true,
    }),
    btn: new Button({ title: "Сохранить", type: "submit" }),
  }),
});
