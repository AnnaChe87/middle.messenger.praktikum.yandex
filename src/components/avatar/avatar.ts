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
      btn: new Button({
        classname: ["overlay"],
        title: "Поменять аватар",
      }),
    });
    this.createModal();
    this.initEvents();
  }

  render() {
    return this.compile(template, this.props);
  }

  createModal() {
    this.setProps({
      changeAvatarModal: new Modal({
        title: "Загрузите файл",
        content: new Form({
          controls: [
            new FormItem({
              type: "file",
              name: "avatar",
              events: {
                change: (e: InputEvent) => this.onFileChange(e),
              },
            }),
          ],
          btn: new Button({
            title: "Поменять",
            type: "submit",
            classname: ["change-avatar-modal"],
          }),
        }),
      }),
    });
  }

  initEvents() {
    this.props.btn!.setProps({
      events: {
        click: () => this.props.changeAvatarModal!.show(),
      },
    });
  }

  onFileChange({ target }: InputEvent) {
    const value = (target as HTMLInputElement).value;

    this.props.changeAvatarModal!.setProps({
      title: value ? "Файл загружен" : "Загрузите файл",
    });
  }
}
