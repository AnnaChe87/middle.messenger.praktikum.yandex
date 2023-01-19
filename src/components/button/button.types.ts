import { Props } from "../../index.types";

export type ButtonProps = Props & {
  type: "submit" | "button";
  title: string;
};
