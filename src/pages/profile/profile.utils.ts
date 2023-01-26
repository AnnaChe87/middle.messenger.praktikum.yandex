import { FormItem } from "../../components";
import { data } from "../../mock";

export function getControls(
  isEdit?: boolean,
  isPassword?: boolean
): FormItem[] {
  if (isPassword) {
    return [
      new FormItem({
        classname: ["horizontal"],
        label: "Старый пароль",
        name: "oldPassword",
        type: "password",
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Новый пароль",
        name: "newPassword",
        type: "password",
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Повторите новый пароль",
        name: "confirmPassword",
        type: "password",
      }),
    ];
  } else {
    return [
      new FormItem({
        classname: ["horizontal"],
        label: "Почта",
        name: "email",
        value: data.currentUser.email,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Логин",
        name: "login",
        value: data.currentUser.login,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Имя",
        name: "first_name",
        value: data.currentUser.first_name,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Фамилия",
        name: "second_name",
        value: data.currentUser.second_name,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Имя в чате",
        name: "display_name",
        value: data.currentUser.display_name,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Телефон",
        name: "phone",
        value: data.currentUser.phone,
        disabled: !isEdit,
      }),
    ];
  }
}
