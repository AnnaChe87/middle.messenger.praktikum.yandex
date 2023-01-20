import { Button, FormItem, Link } from "../../components";
import { Props } from "../../index.types";

export type ProfileProps = Props & {
  controls: FormItem[];
  displayName?: string;
  btn?: Button;
  links?: Link[];
};
