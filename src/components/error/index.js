import template from "./error.hbs";
import link from "../link";

import "./error.scss";

export default function(props = {}) {
    return template({
        ...props,
        link: link({ href: "#/chats", title: "Назад к чатам" }),
    });
}
