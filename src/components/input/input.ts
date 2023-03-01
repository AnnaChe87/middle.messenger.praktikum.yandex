import { Block } from "../../core";
import { InputProps } from "./input.types";
const template = () => "";

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props, "input");
  }

  render() {
    return this.compile(template, this.props);
  }

  _addAttributes(): void {
    super._addAttributes();
    Object.entries(this.props).forEach(([key, value]) => {
      if (["type", "name", "placeholder", "value", "accept"].includes(key)) {
        this.element.setAttribute(key, value);
      }
      if (key === "disabled" && value) {
        this.element.setAttribute(key, key);
      }
    });
  }
}
