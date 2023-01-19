import { Button, FormItem, Link } from "../../components";
import { Props } from "../../index.types";

export type LoginProps = Props & {
  btn: Button;
  link: Link;
  controls: FormItem[];
};
