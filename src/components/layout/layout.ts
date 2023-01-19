import Block from "../../core/Block";
import { LayoutProps } from "./layout.types";
import template from "./layout.hbs";
import "./layout.scss";

export class Layout extends Block {
  constructor(props: LayoutProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
