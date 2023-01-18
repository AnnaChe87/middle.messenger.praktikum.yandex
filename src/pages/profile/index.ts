import template from "./profile.hbs";
import * as data from "../../mock/currentUser.json";
import "./profile.scss";
import link from "../../components/link";
import profileForm from "../../components/profileForm";
import { ProfileProps } from "./profile.types";

export default function (props: ProfileProps = {}) {
  let actions: string[] = [];
  const { isEdit, isPassword } = props;
  if (!isPassword && !isEdit) {
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
