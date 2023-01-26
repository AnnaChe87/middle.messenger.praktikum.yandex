import { Block } from "../../core";
import { Input } from "../input";
import { UploadProps } from "./upload.types";
import template from "./upload.hbs";

import "./upload.scss";

export class Upload extends Block<UploadProps> {
  constructor({ text, classname, ...props }: UploadProps) {
    super({
      classname: [...(classname || []), "upload"],
      text: text || "Выберите файл на компьютере",
      input: new Input({ ...props, accept: "image/*" }),
    });
    this.props.input!.hide();
    this.props.input!.setProps({
      events: {
        change: (e: InputEvent) => this.inputFile(e),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }

  inputFile(e: InputEvent) {
    const value = (e?.target as HTMLInputElement).value;

    if (value) {
      this.setProps({ value: value.split("\\").pop() });
      this.getContent().classList.add("has-value");
    } else {
      this.setProps({ value: undefined });
      this.getContent().classList.remove("has-value");
    }
  }
}
