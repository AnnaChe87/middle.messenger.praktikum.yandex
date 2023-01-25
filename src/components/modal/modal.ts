import { Block } from "../../core";
import { ModalProps } from "./modal.types";
import template from "./modal.hbs";

import "./modal.scss";

/**
 * Модальное окно
 */
export class Modal extends Block<ModalProps> {
  constructor(props: ModalProps) {
    super({
      ...props,
      classname: ["modal-overlay"],
    });
    this.initEvents();
  }

  render() {
    return this.compile(template, this.props);
  }

  initEvents() {
    this.setProps({
      events: {
        click: (e: MouseEvent) => this.onClickOverlay(e),
      },
    });
  }

  onClickOverlay = (e: MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      this.hide();
    }
  };
}
