import {
  ChatsRequestContract,
  UserResponseContract,
  UsersChatRequestContract,
  chatsApi,
  profileApi,
} from "../api";
import { Actions } from "../core";

class ChatsController {
  async getChats(data?: ChatsRequestContract) {
    if (!Actions.getProfile()?.id) return;

    try {
      const { response } = await chatsApi.getChats(data);
      Actions.setChats(response);
    } catch (e) {
      console.error(e.response.reason);
    }
  }

  async createChat(title: string) {
    try {
      await chatsApi.createChat(title);
      this.getChats();
    } catch (e) {
      console.log(e.response.reason);
    }
  }

  async deleteChat(id: number) {
    try {
      await chatsApi.deleteChatById(id);
      this.getChats();
    } catch (e) {
      console.log(e.response.reason);
    }
  }

  async addUsers(user: string) {
    try {
      const { response: usersInfo } = await profileApi.findUserByLogin(user);

      const data: UsersChatRequestContract = {
        chatId: Actions.getCurrentChat()!.id,
        users: usersInfo.map((item: UserResponseContract) => item.id),
      };
      await chatsApi.addUsers(data);
      const { response: usersResponse } = await chatsApi.getUsers(data.chatId);
      Actions.updateCurrentChatUsers(usersResponse);
    } catch (e) {
      console.log(e.response.reason);
    }
  }

  async deleteUsers(user: string) {
    try {
      const { response: usersInfo } = await profileApi.findUserByLogin(user);
      const data: UsersChatRequestContract = {
        chatId: Actions.getCurrentChat()!.id,
        users: usersInfo.map((item: UserResponseContract) => item.id),
      };
      await chatsApi.deleteUsers(data);
      const { response: usersResponse } = await chatsApi.getUsers(data.chatId);
      Actions.updateCurrentChatUsers(usersResponse);
    } catch (e) {
      console.log(e.response.reason);
    }
  }

  async getTokenByChatId(id: number) {
    try {
      const { response } = await chatsApi.getTokenByChatId(id);
      const { response: usersResponse } = await chatsApi.getUsers(id);

      Actions.setCurrentChat(id, response.token, usersResponse);
    } catch (e) {
      console.log(e.response.reason);
    }
  }
}

export const chatsController = new ChatsController();
