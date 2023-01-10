import "./login.scss";
import loginTemplate from "./login.hbs";
import formItem from "../../components/formItem";
import button from "../../components/button";
import link from "../../components/link";

export default function(props = {}) {
    return loginTemplate({
        ...props,
        controls: [
            formItem({ label: "Логин", name: "login" }),
            formItem({ label: "Пароль", name: "password", type: "password" }),
        ],
        btn: button({ title: "Войти", type: "submit" }),
        link: link({ href: "#/signin", title: "Нет аккаунта?" }),
    });
}
