import { Props } from "../../index.types";
import { Link } from "../link/link";

export type ErrorProps = Props & {
  code: string;
  text: string;
  link: Link;
};
