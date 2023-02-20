import { UserResponseContract } from "../api";

export function getUserName(
  user: UserResponseContract,
  current: UserResponseContract
) {
  const { first_name, second_name, login } = user;
  if (login === current.login) {
    return "Вы";
  }
  return `${first_name} ${second_name}`;
}

export function getUsersMap(users: UserResponseContract[]) {
  return users.reduce((acc, el) => ({ ...acc, [el.id]: el }), {});
}
