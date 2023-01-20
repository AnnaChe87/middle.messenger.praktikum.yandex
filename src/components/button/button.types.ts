import { Props } from "../../index.types";

export type ButtonProps = Props & {
  title: string;
  type?: "button" | "submit";
};
