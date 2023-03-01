import { chatsController } from "../../controllers";
import { Button } from "../button";
import { Form, FormItem } from "../form";
import { ModalProps } from "../modal";

export function onAddUser(onSubmit: () => void = () => {}): ModalProps {
  return {
    title: "Добавить пользователя",
    content: new Form({
      controls: [new FormItem({ name: "user", label: "Логин" })],
      btn: new Button({
        title: "Добавить",
        type: "submit",
      }),
      handleSubmit: (data: { user: string }) => {
        chatsController.addUsers(data.user);
        onSubmit();
      },
    }),
  };
}

export function onDeleteUser(onSubmit: () => void = () => {}): ModalProps {
  return {
    title: "Удалить пользователя",
    content: new Form({
      controls: [new FormItem({ name: "user", label: "Логин" })],
      btn: new Button({
        title: "Удалить",
        type: "submit",
      }),
      handleSubmit: (data: { user: string }) => {
        chatsController.deleteUsers(data.user);
        onSubmit();
      },
    }),
  };
}

export function onDeleteChat(onSubmit: () => void = () => {}): ModalProps {
  return {
    title: "Удалить чат?",
    content: new Form({
      controls: [],
      btn: new Button({
        title: "Удалить",
        type: "submit",
      }),
      handleSubmit: () => {
        console.log("1");
        chatsController.deleteChat();
        onSubmit();
      },
    }),
  };
}
