import { Block } from "../../core";
import { Link } from "../link";
import { LayoutProps } from "./layout.types";
import template from "./layout.hbs";

import "./layout.scss";
import { ModalService } from "../../core/ModalService";
import { ROUTE_NAMES } from "../../routing";

/**
 * Общий слой для всех страниц
 */
export class Layout extends Block<LayoutProps> {
  constructor(props: LayoutProps) {
    super({
      ...props,
      classname: [...(props.classname || []), "container"],
      link: new Link({ href: ROUTE_NAMES.BASE, title: "На главную" }),
      modal: ModalService.getInstance().modal,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
