import { ChatResponseContract, UserResponseContract } from "../api";
import { getTime, getUserName, getUsersMap } from "../utils";
import { SocketMessageContract } from "./Socket";
import { EVENTS, STORE_KEYS, Store } from "./Store";

const store = new Store();

const clearState = () => {
  store.clearState();
};

const getProfile = () => {
  return store.getState().current;
};

const setProfile = (user: UserResponseContract) => {
  store.setState(STORE_KEYS.CURRENT, user);
  store.emit(EVENTS.UPDATE_PROFILE);
};

const setChats = (chats: ChatResponseContract) => {
  store.setState(STORE_KEYS.CHATS, chats);
  store.emit(EVENTS.UPDATE_CHATS);
};

const getChats = () => {
  return store.getState().chats;
};

const setCurrentChat = (
  id: number,
  token: string,
  users: UserResponseContract[]
) => {
  store.setState(STORE_KEYS.CURRENT_CHAT, {
    id,
    token,
    users: getUsersMap(users),
  });
  store.setState(STORE_KEYS.MESSAGES, []);
  store.emit(EVENTS.UPDATE_CURRENT_CHAT);
  store.emit(EVENTS.UPDATE_MESSAGES);
};

const updateCurrentChatUsers = (users: UserResponseContract[]) => {
  const state = store.getState();
  const currentChat = state.currentChat;
  if (!currentChat) return;

  store.setState(STORE_KEYS.CURRENT_CHAT, {
    ...currentChat,
    users: getUsersMap(users),
  });
  store.emit(EVENTS.UPDATE_CURRENT_CHAT);
};

const getCurrentChat = () => {
  return store.getState().currentChat;
};

const getSocketInfo = () => {
  const state = store.getState();
  const { current, currentChat } = state;
  if (!currentChat || !current) return;

  return {
    userId: current.id,
    chatId: currentChat.id,
    token: currentChat.token,
  };
};

const setMessages = (messages: SocketMessageContract[]) => {
  const state = store.getState();
  const { current, currentChat, messages: prevMessages } = state;
  if (!currentChat || !current) return;

  const { users } = currentChat;

  const preparedMessages = messages.map((message) => ({
    name: getUserName(users[message.user_id], current),
    isCurrent: message.user_id === current.id,
    content: message.content,
    time: getTime(message.time),
  }));

  store.setState(STORE_KEYS.MESSAGES, [...prevMessages, ...preparedMessages]);
  store.emit(EVENTS.UPDATE_MESSAGES);
};

const getMessages = () => {
  return store.getState().messages;
};

const getAvatarPath = () => {
  const profile = getProfile();
  if (!profile?.avatar) return null;

  return `https://ya-praktikum.tech/api/v2/resources${profile.avatar}`;
};

export {
  clearState,
  getProfile,
  setProfile,
  setChats,
  getChats,
  setCurrentChat,
  getCurrentChat,
  getSocketInfo,
  setMessages,
  getMessages,
  updateCurrentChatUsers,
  getAvatarPath,
};
