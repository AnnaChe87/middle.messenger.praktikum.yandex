import { Block } from "../../core";
import { InputProps } from "./input.types";
import template from "./input.hbs";

export class Input extends Block {
  constructor(props: InputProps) {
    super(props, "input");
  }

  render() {
    return this.compile(template, this.props);
  }

  _addAttributes(): void {
    super._addAttributes();
    Object.entries(this.props).forEach(([key, value]) => {
      if (["type", "name", "placeholder", "value"].includes(key)) {
        this._element.setAttribute(key, value);
      }
      if (key === "disabled" && value) {
        this._element.setAttribute(key, key);
      }
    });
  }
}
