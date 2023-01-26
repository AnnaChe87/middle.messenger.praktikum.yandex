import { Input, InputProps } from "../input";

export type UploadProps = InputProps & {
  text?: string;
  input?: Input;
  accept?: string;
};
