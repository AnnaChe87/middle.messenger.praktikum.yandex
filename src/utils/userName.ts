import * as currentUserData from "../mock/currentUser.json";
import { UserModel } from "../models";

export default function (user: UserModel) {
  const { first_name, second_name, login } = user;
  if (login === currentUserData.login) {
    return "Вы";
  }
  return `${first_name} ${second_name}`;
}
