import {
  ChatsRequestContract,
  UserResponseContract,
  UsersChatRequestContract,
  chatsApi,
  profileApi,
  ChatResponseContract,
} from "../api";
import { Actions } from "../core";
import { getImgSrc, getUsersMap } from "../utils";

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

  async deleteChat() {
    try {
      const id = Actions.getCurrentChat()?.id;
      console.log(id);
      if (!id) return;

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
      Actions.updateCurrentChat({ users: getUsersMap(usersResponse) });
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
      Actions.updateCurrentChat({ users: getUsersMap(usersResponse) });
    } catch (e) {
      console.log(e.response.reason);
    }
  }

  async getTokenByChat(chat: ChatResponseContract) {
    try {
      const { response } = await chatsApi.getTokenByChatId(chat.id);
      const { response: usersResponse } = await chatsApi.getUsers(chat.id);

      Actions.setCurrentChat({
        ...chat,
        token: response.token,
        avatar: chat.avatar && getImgSrc(chat.avatar),
        users: getUsersMap(usersResponse),
      });
    } catch (e) {
      console.log(e.response.reason);
    }
  }
}

export const chatsController = new ChatsController();
