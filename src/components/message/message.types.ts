import { UserModel } from "../../models";

export interface MessageProps {
  user: UserModel;
  time: string;
  content: string;
}
