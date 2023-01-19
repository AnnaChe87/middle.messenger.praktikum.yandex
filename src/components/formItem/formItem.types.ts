import { Props } from "../../index.types";

export type FormItemProps = Props & {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "password" | "text" | "search";
};
