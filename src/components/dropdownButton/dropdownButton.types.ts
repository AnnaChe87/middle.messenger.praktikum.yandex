import { Props } from "../../index.types";
import { Button } from "../button";
import { Menu } from "../menu";

export type DropdownButtonProps = Props & {
  btn: Button;
  menu: Menu;
};
