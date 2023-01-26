import { Button } from "../button";
import { Form, FormItem } from "../form";
import { ModalProps } from "../modal";

export function onAddUser(): ModalProps {
  return {
    title: "Добавить пользователя",
    content: new Form({
      controls: [new FormItem({ name: "user", label: "Логин" })],
      btn: new Button({
        title: "Добавить",
        type: "submit",
      }),
    }),
  };
}

export function onDeleteUser(): ModalProps {
  return {
    title: "Удалить пользователя",
    content: new Form({
      controls: [new FormItem({ name: "user", label: "Логин" })],
      btn: new Button({
        title: "Удалить",
        type: "submit",
      }),
    }),
  };
}
