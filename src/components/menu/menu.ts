import { Block } from "../../core";
import { MenuProps } from "./menu.types";
import template from "./menu.hbs";

import "./menu.scss";

/**
 * Меню
 */
export class Menu extends Block<MenuProps> {
  constructor(props: MenuProps) {
    props.classname = [
      "menu",
      "shadowed",
      props.direction?.[0] || "bottom",
      props.direction?.[1] || "right",
    ];
    super(props, "menu");
  }

  render() {
    return this.compile(template, this.props);
  }
}
