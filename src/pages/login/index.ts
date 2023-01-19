import "./login.scss";
import tem from "./login.hbs";
import formItem from "../../components/formItem";
import { Button, Link } from "../../components";

export default function (props = {}) {
  return tem({
    ...props,
    controls: [
      formItem({ label: "Логин", name: "login" }),
      formItem({ label: "Пароль", name: "password", type: "password" }),
    ],
    btn: new Button({ title: "Войти", type: "submit" }),
    link: new Link({ href: "#/signin", title: "Нет аккаунта?" }),
  });
}
