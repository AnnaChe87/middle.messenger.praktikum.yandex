import template from "./profile.hbs";
import data from "../../mock/currentUser.json";
import "./profile.scss";
import link from "../../components/link";
import button from "../../components/button";
import profileForm from "../../components/profileForm";

export default function(props = {}) {
    let actions = [];
    if (props.isPassword || props.isEdit) {
        actions = [button({ title: "Сохранить" })];
    } else {
        actions = [
            link({ href: "#/profile-edit", title: "Изменить данные" }),
            link({ href: "#/profile-pass", title: "Изменить пароль" }),
            link({ href: "#", title: "Выйти", color: "red" }),
        ];
    }
    return template({
        ...props,
        ...data,
        form: profileForm({ isEdit: props.isEdit, isPassword: props.isPassword }),
        actions,
    });
}
