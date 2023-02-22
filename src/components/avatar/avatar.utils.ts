import { Button } from "../button";
import { Form, FormItem } from "../form";
import { ModalProps } from "../modal";

export function changeAvatarModal(
  value?: string,
  onChange: (e: InputEvent) => void = () => {}
): ModalProps {
  return {
    title: "Загрузите файл",
    content: new Form({
      classname: ["column"],
      controls: [
        new FormItem({
          type: "file",
          name: "avatar",
          value: value,
          events: {
            change: onChange,
          },
        }),
      ],
      btn: new Button({
        title: "Поменять",
        type: "submit",
        classname: ["change-avatar-modal"],
      }),
    }),
  };
}
