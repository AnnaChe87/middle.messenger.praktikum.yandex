import template from './chats.hbs';
import link from '../../components/link';
import './chats.scss';
import search from '../../components/search';
import * as data from '../../mock/chats.json';
import chatListItem from '../../components/chatListItem';
import chat from '../../components/chat';

export default function (props = {}) {
  return template({
    ...props,
    link: link({ href: '#/profile', title: 'Профиль' }),
    search: search(),
    chats: data.map(chatListItem),
    selectedChat: chat(data[0]),
  });
}
