import {
  ChatsRequestContract,
  UsersChatRequestContract,
  chatsApi,
} from "../api";
import { Actions } from "../core";

class ChatsController {
  async getChats(data?: ChatsRequestContract) {
    const { response, status } = await chatsApi.getChats(data);
    if (status === 200) {
      Actions.setChats(response);
    }
  }

  async createChat(title: string) {
    await chatsApi.createChat(title);
    this.getChats();
  }

  async deleteChat(id: number) {
    await chatsApi.deleteChatById(id);
    this.getChats();
  }

  async addUsers(data: UsersChatRequestContract) {
    await chatsApi.addUsers(data);
  }

  async deleteUsers(data: UsersChatRequestContract) {
    await chatsApi.deleteUsers(data);
  }

  async getTokenByChatId(id: number) {
    const { response } = await chatsApi.getTokenByChatId(id);
    const { response: usersResponse } = await chatsApi.getUsers(id);

    Actions.setCurrentChat(id, response.token, usersResponse);
  }
}

export const chatsController = new ChatsController();
