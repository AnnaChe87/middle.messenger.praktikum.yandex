import { Block } from "../../core";
import { Props } from "../../index.types";

export type ModalProps = Props & {
  title?: string;
  content: Block;
};
