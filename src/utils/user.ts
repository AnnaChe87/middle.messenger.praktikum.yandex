import { data, UserModel } from "../mock";

export function getUserName(user: UserModel) {
  const { first_name, second_name, login } = user;
  if (login === data.currentUser.login) {
    return "Вы";
  }
  return `${first_name} ${second_name}`;
}
