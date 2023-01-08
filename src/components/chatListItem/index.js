import { getTime } from "../../utils/dateTime";
import template from "./chatListItem.hbs";
import "./chatListItem.scss";

export default function(props = {}) {
    return template({
        ...props,
        formattedTime: getTime(props.last_message.time)
    });
}
