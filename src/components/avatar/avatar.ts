import { Block } from "../../core";
import { AvatarProps } from "./avatar.types";
import { Button } from "../button";
import { Form, FormItem } from "../form";
import { Modal } from "../modal";
import template from "./avatar.hbs";

import "./avatar.scss";

/**
 * Контрол отображения/изменения аватара в профиле
 */
export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super({
      ...props,
      changeAvatarModal: new Modal({
        title: "Загрузите файл",
        content: new Form({
          controls: [new FormItem({ type: "file", name: "avatar" })],
          btn: new Button({
            title: "Поменять",
            type: "submit",
          }),
        }),
      }),
      btn: new Button({
        classname: ["overlay"],
        title: "Поменять аватар",
      }),
    });
    this.props?.btn?.setProps({
      events: {
        click: () => this.props?.changeAvatarModal?.show(),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
