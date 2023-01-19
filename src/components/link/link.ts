import { LinkProps } from "./link.types";
import template from "./link.hbs";
import "./link.scss";
import Block from "../../core/Block";

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
