import { HTTPTransport } from "../core";
import { UserResponseContract } from "./auth.api";

export type ChatsRequestContract = {
  offset: number;
  limit: number;
  title?: string;
};

export const DEFAULT_CHATS_PARAMS: ChatsRequestContract = {
  offset: 0,
  limit: 10,
};

export type UsersChatRequestContract = {
  chatId: number;
  users: number[];
};

export type LastMessageResponseContract = {
  user: Omit<UserResponseContract, "id">;
  time: string;
  content: string;
};

export type ChatResponseContract = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: LastMessageResponseContract;
};

export class ChatsApi {
  _httpTransport: HTTPTransport;

  private readonly baseUrl = "/chats";
  private readonly usersUrl = `${this.baseUrl}/user`;
  private readonly tokenUrl = `${this.baseUrl}/token`;

  constructor() {
    this._httpTransport = new HTTPTransport();
  }

  getChats(data: ChatsRequestContract = DEFAULT_CHATS_PARAMS) {
    return this._httpTransport.get(this.baseUrl, { data });
  }

  createChat(title: string) {
    return this._httpTransport.post(this.baseUrl, { data: { title } });
  }

  deleteChatById(chatId: number) {
    return this._httpTransport.delete(this.baseUrl, { data: { chatId } });
  }

  addUsers(data: UsersChatRequestContract) {
    return this._httpTransport.put(this.usersUrl, { data });
  }

  deleteUsers(data: UsersChatRequestContract) {
    return this._httpTransport.delete(this.usersUrl, { data });
  }

  getTokenByChatId(id: number) {
    return this._httpTransport.post(`${this.tokenUrl}/${id}`, {});
  }

  getUsers(id: number) {
    return this._httpTransport.get(`${this.baseUrl}/${id}/users`, {});
  }
}

export const chatsApi = new ChatsApi();
