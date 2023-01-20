import { Block } from "../../core";
import { Props } from "../../index.types";
import { Link } from "../link";

export type LayoutProps = Props & {
  content: Block;
  link: Link;
};
