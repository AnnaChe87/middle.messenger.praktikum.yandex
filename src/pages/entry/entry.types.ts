import { Form, Link } from "../../components";
import { Props } from "../../index.types";

export type EntryProps = Props & {
  title: string;
  form: Form;
  link: Link;
};
