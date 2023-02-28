import { Link } from "../../components";
import { Block } from "../../core";
import { ErrorProps } from "./error.types";
import template from "./error.hbs";

import "./error.scss";
import { ROUTE_NAMES } from "../../routing";

/**
 * Ошибка
 */
class Error extends Block<ErrorProps> {
  constructor(props: ErrorProps) {
    props.classname = ["error", "column"];
    props.link = new Link({ href: ROUTE_NAMES.BASE, title: "Назад к чатам" });
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const error404 = new Error({
  code: "404",
  text: "Не туда попали",
});

export const error500 = new Error({
  code: "500",
  text: "Мы уже фиксим",
});
