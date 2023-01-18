import template from "./button.hbs";
import "./button.scss";
import { ButtonProps } from "./button.types";

export default function (props: ButtonProps) {
  return template(props);
}
