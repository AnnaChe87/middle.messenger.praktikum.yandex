import { ChatResponseContract, UserResponseContract } from "../api";
import { getTime, getUserName } from "../utils";
import { SocketMessageContract } from "./Socket";
import { EVENTS, STORE_KEYS, Store, CurrentChatStoreContract } from "./Store";

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

const setCurrentChat = (data: Partial<CurrentChatStoreContract>) => {
  const { current } = store.getState();
  if (!current) return;

  store.setState(STORE_KEYS.CURRENT_CHAT, {
    ...data,
    isCurrent: data.created_by === current.id,
  });
  store.setState(STORE_KEYS.MESSAGES, []);
  store.emit(EVENTS.UPDATE_CURRENT_CHAT);
  store.emit(EVENTS.UPDATE_MESSAGES);
};

const updateCurrentChat = (data: Partial<CurrentChatStoreContract>) => {
  const state = store.getState();
  const currentChat = state.currentChat;
  if (!currentChat) return;

  store.setState(STORE_KEYS.CURRENT_CHAT, {
    ...currentChat,
    ...data,
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
  updateCurrentChat,
  getAvatarPath,
};
