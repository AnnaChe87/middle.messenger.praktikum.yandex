import * as chat from "./chat.json";
import * as chats from "./chats.json";
import * as currentUser from "./currentUser.json";
import { ChatModel, MessageModel, UserModel } from "./mock.types";

export * from "./mock.types";
export const data = {
  chat: chat as MessageModel[],
  chats: chats as ChatModel[],
  currentUser: currentUser as UserModel,
};
