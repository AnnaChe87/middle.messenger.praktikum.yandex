import { Props } from "../../../../index.types";

export type MenuItemProps = Props & {
  action:
    | "add"
    | "remove"
    | "attach-content"
    | "attach-file"
    | "attach-location";
  title: string;
};
