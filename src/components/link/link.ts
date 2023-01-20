import { Block } from "../../core";
import { LinkProps } from "./link.types";
import template from "./link.hbs";

import "./link.scss";

/**
 * Ссылка
 */
export class Link extends Block {
  constructor(props: LinkProps) {
    props.classname = props.color ? ["link", props.color] : "link";
    super(props, "a");
  }

  render() {
    return this.compile(template, this.props);
  }

  _addAttributes(): void {
    super._addAttributes();
    this._element.setAttribute("href", this.props.href);
  }
}
