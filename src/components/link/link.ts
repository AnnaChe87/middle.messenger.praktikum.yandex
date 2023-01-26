import { Block } from "../../core";
import { LinkProps } from "./link.types";
import template from "./link.hbs";

import "./link.scss";

/**
 * Ссылка
 */
export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    props.classname = ["link"];
    if (props.color) {
      props.classname.push(props.color);
    }
    super(props, "a");
  }

  render() {
    return this.compile(template, this.props);
  }

  _addAttributes(): void {
    super._addAttributes();
    this.element.setAttribute("href", this.props.href);
  }
}
