import template from "./chat.hbs";
import data from "../../mock/chat.json";
import "./chat.scss";
import message from "../message";

export default function(props = {}) {
    return template({
        ...props,
        messages: data.map(message),
    });
}