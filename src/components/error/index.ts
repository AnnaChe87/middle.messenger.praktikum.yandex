import template from "./error.hbs";
import link from "../link";

import "./error.scss";
import { ErrorProps } from "./error.types";

export default function (props: ErrorProps) {
  return template({
    ...props,
    link: link({ href: "#/chats", title: "Назад к чатам" }),
  });
}
