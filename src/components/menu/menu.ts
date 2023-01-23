import { Block } from "../../core";
import { MenuProps } from "./menu.types";
import template from "./menu.hbs";

import "./menu.scss";

export class Menu extends Block {
  constructor(props: MenuProps) {
    props.classname = [
      "menu",
      props.direction?.[0] || "bottom",
      props.direction?.[1] || "right",
    ];
    super(props, "menu");
  }

  render() {
    return this.compile(template, this.props);
  }
}
