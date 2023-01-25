import { Block } from "../../core";
import { DropdownButtonProps } from "./dropdownButton.types";
import template from "./dropdownButton.hbs";

import "./dropdownButton.scss";

/**
 * Кнопка с выпадающим меню
 */
export class DropdownButton extends Block {
  constructor(props: DropdownButtonProps) {
    props.classname = ["dropdown-button"];
    super(props);
    this.props.btn.setProps({
      events: {
        click: () => this.props.menu.toggle(),
      },
    });
    this.props.menu.hide();
  }

  render() {
    return this.compile(template, this.props);
  }
}
