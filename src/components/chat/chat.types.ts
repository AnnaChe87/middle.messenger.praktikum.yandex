import { Props } from "../../index.types";
import { Button } from "../button";
import { DropdownButton } from "../dropdownButton";
import { FormItem } from "../form";
import { Message } from "./components";

export type ChatProps = Props & {
  title: string;
  messages: Message[];
  attach?: Button;
  input?: FormItem;
  btn?: Button;
  actions?: DropdownButton;
};
