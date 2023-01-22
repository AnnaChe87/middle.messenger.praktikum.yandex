import { Block } from "../../core";
import { Link } from "../link";
import { LayoutProps } from "./layout.types";
import template from "./layout.hbs";

import "./layout.scss";

/**
 * Общий слой для всех страниц
 */
export class Layout extends Block {
  constructor(props: LayoutProps) {
    props.classname = ["container"];
    props.link = new Link({ href: "#", title: "На главную" });
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
