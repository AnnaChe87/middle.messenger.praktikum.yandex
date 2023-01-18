import link from "../link";
import template from "./layout.hbs";
import "./layout.scss";
import { LayoutProps } from "./layout.types";

export default function (props: LayoutProps) {
  return template({
    ...props,
    link: link({ href: "#", title: "На главную" }),
  });
}
