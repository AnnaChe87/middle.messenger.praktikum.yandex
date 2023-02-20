import { UserResponseContract } from "../../api";
import { FormItem } from "../../components";

type ProfileFormParams = {
  isEdit?: boolean;
  isPassword?: boolean;
  user?: UserResponseContract | null;
};

export function getControls({
  isEdit,
  isPassword,
  user,
}: ProfileFormParams): FormItem[] {
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
        value: user?.email,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Логин",
        name: "login",
        value: user?.login,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Имя",
        name: "first_name",
        value: user?.first_name,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Фамилия",
        name: "second_name",
        value: user?.second_name,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Имя в чате",
        name: "display_name",
        value: user?.display_name,
        disabled: !isEdit,
      }),
      new FormItem({
        classname: ["horizontal"],
        label: "Телефон",
        name: "phone",
        value: user?.phone,
        disabled: !isEdit,
      }),
    ];
  }
}
