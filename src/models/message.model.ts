import { UserModel } from "./user.model";

export interface MessageModel {
  user: UserModel;
  time: string;
  content: string;
}
