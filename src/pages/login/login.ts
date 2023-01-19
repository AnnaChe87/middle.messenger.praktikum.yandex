import Block from "../../core/Block";
import { LoginProps } from "./login.types";
import "./login.scss";
import template from "./login.hbs";
import { Button, Link } from "../../components";

class Login extends Block {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const login = new Login({
  btn: new Button({
    title: "Войти",
    type: "submit",
  }),
  link: new Link({ href: "#/signin", title: "Нет аккаунта?" }),
});
