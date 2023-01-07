import userName from "../../utils/userName";
import template from "./message.hbs";
import data from "../../mock/currentUser.json";
import "./message.scss";

export default function(props = {}) {
    return template({
        ...props,
        name: userName(props.user),
        isCurrent: props.user.login === data.login,
    });
}