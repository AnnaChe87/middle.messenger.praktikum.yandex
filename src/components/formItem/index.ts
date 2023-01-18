import template from "./formItem.hbs";
import "./formItem.scss";
import { FormItemProps } from "./formItem.types";

export default function (props: FormItemProps) {
  return template(props);
}
