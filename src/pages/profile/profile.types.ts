import { Avatar, Form, Link } from "../../components";
import { Props } from "../../index.types";

export type ProfileProps = Props & {
  form: Form;
  displayName?: string;
  links?: Link[];
  avatar?: Avatar;
};
