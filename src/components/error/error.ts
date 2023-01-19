import { Block } from "../../core";
import { ErrorProps } from "./error.types";
import template from "./error.hbs";

import "./error.scss";

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
