import { Button, Form, FormItem, ModalProps } from "../../components";
import { chatsController } from "../../controllers";
import { FormDataType } from "./chats.types";

export function onAddChat(onSubmit: () => void = () => {}): ModalProps {
  return {
    title: "Создание чата",
    content: new Form({
      controls: [new FormItem({ name: "title", label: "Название чата" })],
      btn: new Button({ title: "Создать", type: "submit" }),
      handleSubmit: (data: FormDataType) => {
        chatsController.createChat(data.title);
        onSubmit();
      },
    }),
  };
}
