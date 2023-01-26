import { Block, ModalService } from "../../core";
import { AvatarProps } from "./avatar.types";
import { Button } from "../button";
import { changeAvatarModal } from "./avatar.utils";
import template from "./avatar.hbs";

import "./avatar.scss";

/**
 * Контрол отображения/изменения аватара в профиле
 */
export class Avatar extends Block<AvatarProps> {
  modalService = ModalService.getInstance();
  constructor(props: AvatarProps) {
    super({
      ...props,
      btn: new Button({
        classname: ["overlay"],
        title: "Поменять аватар",
      }),
    });
    this.initEvents();
  }

  render() {
    return this.compile(template, this.props);
  }

  initEvents() {
    this.props.btn!.setProps({
      events: {
        click: () =>
          this.modalService.openModal(
            changeAvatarModal(this.props.value, this.onFileChange)
          ),
      },
    });
  }

  onFileChange = ({ target }: InputEvent) => {
    const value = (target as HTMLInputElement).value;

    this.modalService.modal.setProps({
      title: value ? "Файл загружен" : "Загрузите файл",
    });
  };
}
