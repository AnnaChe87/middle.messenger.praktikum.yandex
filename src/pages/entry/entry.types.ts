import { Button, FormItem, Link } from "../../components";
import { Props } from "../../index.types";

export type EntryProps = Props & {
  title: string;
  controls: FormItem[];
  btn: Button;
  link: Link;
};
