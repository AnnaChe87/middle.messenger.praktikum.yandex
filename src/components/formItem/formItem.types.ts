import { Props } from "../../index.types";
import { FormError } from "../error/formError";
import { InputProps } from "../input";

export type FormItemProps = Props &
  InputProps & {
    label?: string;
    errors?: FormError;
  };
