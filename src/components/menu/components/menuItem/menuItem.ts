import { Block } from "../../../../core";
import { MenuItemProps } from "./menuItem.types";
import template from "./menuItem.hbs";

import "./menuItem.scss";

export class MenuItem extends Block {
  constructor(props: MenuItemProps) {
    props.classname = ["menu-item"];
    if (props.action) {
      props.classname.push("with-icon", props.action);
    }
    super(props, "p");
  }

  render() {
    return this.compile(template, this.props);
  }
}
