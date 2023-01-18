import template from "./profileItem.hbs";
import "./profileItem.scss";
import { ProfileItemProps } from "./profileItem.types";

export default function (props: ProfileItemProps) {
  return template(props);
}
