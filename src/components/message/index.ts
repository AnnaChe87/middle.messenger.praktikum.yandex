import userName from '../../utils/userName';
import template from './message.hbs';
import * as data from '../../mock/currentUser.json';
import './message.scss';
import { MessageProps } from './message.types';

export default function (props: MessageProps) {
  return template({
    ...props,
    name: userName(props.user),
    isCurrent: props.user.login === data.login,
  });
}
