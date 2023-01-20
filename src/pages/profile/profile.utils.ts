import { FormItem } from "../../components";
import mock from "../../mock";

export function getControls(
  isEdit?: boolean,
  isPassword?: boolean
): FormItem[] {
  if (isPassword) {
    return [
      new FormItem({ title: "Старый пароль", name: "oldPassword" }),
      new FormItem({
        title: "Новый пароль",
        name: "newPassword",
        type: "password",
      }),
      new FormItem({
        title: "Повторите новый пароль",
        name: "confirmPassword",
        type: "password",
      }),
    ];
  } else {
    return [
      new FormItem({
        title: "Почта",
        name: "email",
        value: mock.currentUser.email,
        disabled: !isEdit,
      }),
      new FormItem({
        title: "Логин",
        name: "login",
        value: mock.currentUser.login,
        disabled: !isEdit,
      }),
      new FormItem({
        title: "Имя",
        name: "first_name",
        value: mock.currentUser.first_name,
        disabled: !isEdit,
      }),
      new FormItem({
        title: "Фамилия",
        name: "second_name",
        value: mock.currentUser.second_name,
        disabled: !isEdit,
      }),
      new FormItem({
        title: "Имя в чате",
        name: "display_name",
        value: mock.currentUser.display_name,
        disabled: !isEdit,
      }),
      new FormItem({
        title: "Телефон",
        name: "phone",
        value: mock.currentUser.phone,
        disabled: !isEdit,
      }),
    ];
  }
}
