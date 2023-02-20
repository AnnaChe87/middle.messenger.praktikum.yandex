import { Props } from "../../index.types";
import { Button } from "../button";
import { FormItem } from "./components";

export type FormProps = Props & {
  controls: FormItem[];
  btn?: Button;
  handleSubmit?: (data: Record<string, string>) => void;
};
