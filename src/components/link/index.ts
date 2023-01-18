import template from "./link.hbs";
import "./link.scss";
import { LinkProps } from "./link.types";

export default function (props: LinkProps) {
  return template(props);
}
