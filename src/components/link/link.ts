import { Block } from "../../core";
import { LinkProps } from "./link.types";
import template from "./link.hbs";

import "./link.scss";

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
