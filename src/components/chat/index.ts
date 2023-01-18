import template from "./chat.hbs";
import * as data from "../../mock/chat.json";
import "./chat.scss";
import message from "../message";
import { ChatProps } from "./chat.types";

export default function (props: ChatProps) {
  return template({
    ...props,
    messages: data.map(message),
  });
}
