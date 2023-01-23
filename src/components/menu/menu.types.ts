import { Props } from "../../index.types";
import { MenuItem } from "../menuItem";

export type MenuProps = Props & {
  items: MenuItem[];
  direction?: ["top" | "bottom", "right" | "left"];
};
