import { Props } from "../../index.types";

export type LinkProps = Props & {
  href: string;
  title: string;
  color?: "red";
};
