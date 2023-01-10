import template from "./signin.hbs";
import formItem from "../../components/formItem";
import button from "../../components/button";

import "./signin.scss";
import link from "../../components/link";

export default function(props = {}) {
    return template({
        ...props,
        controls: [
            formItem({ label: "Почта", name: "email"}),
            formItem({ label: "Логин", name: "login"}),
            formItem({ label: "Имя", name: "first_name"}),
            formItem({ label: "Фамилия", name: "second_name"}),
            formItem({ label: "Пароль", name: "password", type: "password" }),
            formItem({ label: "Пароль(еще раз)", name: "confirm", type: "password" }),
            formItem({ label: "Телефон", name: "phone"}),
        ],
        btn: button({ title: "Зарегистрироваться" }),
        link: link({ href: "#/login", title: "Войти" }),
    });
}
