import currentUserData from '../mock/currentUser.json';

export default function (user = {}) {
  const { first_name, second_name, login } = user;
  if (login === currentUserData.login) {
    return 'Вы';
  }
  return `${first_name} ${second_name}`;
}
