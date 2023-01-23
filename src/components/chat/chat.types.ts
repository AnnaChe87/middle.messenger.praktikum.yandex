import { Props } from "../../index.types";
import { Button } from "../button";
import { DropdownButton } from "../dropdownButton/dropdownButton";
import { FormItem } from "../formItem";
import { Message } from "../message/message";

export type ChatProps = Props & {
  title: string;
  messages: Message[];
  attach?: Button;
  input?: FormItem;
  btn?: Button;
  actions?: DropdownButton;
};
