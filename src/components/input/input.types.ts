import { Props } from "../../index.types";

export type InputProps = Props & {
  placeholder?: string;
  type?: "password" | "text" | "search";
  disabled?: boolean;
  value?: string;
};
