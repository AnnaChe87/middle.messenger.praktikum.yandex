import { Link } from "../../components";
import { Props } from "../../index.types";

export type ErrorProps = Props & {
  code: string;
  text: string;
  link?: Link;
};
