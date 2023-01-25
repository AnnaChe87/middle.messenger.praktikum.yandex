import { Props } from "../../index.types";

export type InputProps = Props & {
  placeholder?: string;
  type?: "password" | "text" | "search" | "file";
  disabled?: boolean;
  value?: string;
};
