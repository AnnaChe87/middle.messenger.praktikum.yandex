import {
  SigninRequestContract,
  SignupRequestContract,
  authApi,
} from "../api/auth.api";
import { Actions } from "../core";
import { Router, ROUTE_NAMES } from "../routing";
import { chatsController } from "./chats.controller";

class AuthController {
  async signup(data: SignupRequestContract) {
    try {
      await authApi.signup(data);
      const { response } = await authApi.getUserInfo();
      Actions.setProfile(response);
      await chatsController.getChats();
      Router._instance.go(ROUTE_NAMES.MESSENGER);
    } catch (e) {
      console.error(e.response.reason);
    }
  }

  async signin(data: SigninRequestContract) {
    try {
      await authApi.signin(data);
      const { response } = await authApi.getUserInfo();
      Actions.setProfile(response);
      await chatsController.getChats();
      Router._instance.go(ROUTE_NAMES.MESSENGER);
    } catch (e) {
      console.error(e.response.reason);
    }
  }

  async getUser() {
    try {
      const { response } = await authApi.getUserInfo();
      Actions.setProfile(response);
      await chatsController.getChats();
      Router._instance.go(ROUTE_NAMES.MESSENGER);
    } catch (e) {
      console.error(e.response.reason);
    }
  }

  async logout() {
    await authApi.logout();
    Actions.clearState();
    Router._instance.go(ROUTE_NAMES.BASE);
  }
}

export const authController = new AuthController();
