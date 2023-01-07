import template from "./profileForm.hbs";
import profileItem from "../profileItem";
import data from "../../mock/currentUser.json";

export default function(props = {}) {
    let items = [];
    if (props.isPassword) {
        items = [
            profileItem({ title: "Старый пароль", name: "oldPassword" }),
            profileItem({ title: "Новый пароль", name: "newPassword", type: "password" }),
            profileItem({ title: "Повторите новый пароль", name: "confirmPassword", type: "password" }),
        ];
    } else {
        items = [
            profileItem({ title: "Почта", name: "email", value: data.email, disabled: !props.isEdit }),
            profileItem({ title: "Логин", name: "login", value: data.login, disabled: !props.isEdit }),
            profileItem({ title: "Имя", name: "first_name", value: data.first_name, disabled: !props.isEdit }),
            profileItem({ title: "Фамилия", name: "second_name", value: data.second_name, disabled: !props.isEdit }),
            profileItem({ title: "Имя в чате", name: "display_name", value: data.display_name, disabled: !props.isEdit }),
            profileItem({ title: "Телефон", name: "phone", value: data.phone, disabled: !props.isEdit }),
        ];
    }
    
    return template({
        ...props,
        items,
    });
}
