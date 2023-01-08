import link from "../link";
import template from "./layout.hbs";
import "./layout.scss";

export default function (props) {
    return template({
        ...props,
        link: link({ href: "#", title: "На главную" })
    });
}
