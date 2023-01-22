import { FormItem } from "../../components";
import { data } from "../../mock";

export function getControls(
  isEdit?: boolean,
  isPassword?: boolean
): FormItem[] {
  if (isPassword) {
    return [
      new FormItem({ label: "Старый пароль", name: "oldPassword" }),
      new FormItem({
        label: "Новый пароль",
        name: "newPassword",
        type: "password",
      }),
      new FormItem({
        label: "Повторите новый пароль",
        name: "confirmPassword",
        type: "password",
      }),
    ];
  } else {
    return [
      new FormItem({
        label: "Почта",
        name: "email",
        value: data.currentUser.email,
        disabled: !isEdit,
      }),
      new FormItem({
        label: "Логин",
        name: "login",
        value: data.currentUser.login,
        disabled: !isEdit,
      }),
      new FormItem({
        label: "Имя",
        name: "first_name",
        value: data.currentUser.first_name,
        disabled: !isEdit,
      }),
      new FormItem({
        label: "Фамилия",
        name: "second_name",
        value: data.currentUser.second_name,
        disabled: !isEdit,
      }),
      new FormItem({
        label: "Имя в чате",
        name: "display_name",
        value: data.currentUser.display_name,
        disabled: !isEdit,
      }),
      new FormItem({
        label: "Телефон",
        name: "phone",
        value: data.currentUser.phone,
        disabled: !isEdit,
      }),
    ];
  }
}
