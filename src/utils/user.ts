import * as currentUserData from "../mock/currentUser.json";
import { UserModel } from "../mock/mock.types";

export function getUserName(user: UserModel) {
  const { first_name, second_name, login } = user;
  if (login === currentUserData.login) {
    return "Вы";
  }
  return `${first_name} ${second_name}`;
}
