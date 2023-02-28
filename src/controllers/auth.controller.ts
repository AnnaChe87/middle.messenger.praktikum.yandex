import { router } from "..";
import {
  SigninRequestContract,
  SignupRequestContract,
  authApi,
} from "../api/auth.api";
import { Actions } from "../core";
import { ROUTE_NAMES } from "../routing";

class AuthController {
  async signup(data: SignupRequestContract) {
    try {
      await authApi.signup(data);
      const { response } = await authApi.getUserInfo();
      Actions.setProfile(response);
      router.go(ROUTE_NAMES.CHATS);
    } catch (e) {
      console.error(e.response.reason);
    }
  }

  async signin(data: SigninRequestContract) {
    try {
      await authApi.signin(data);
      const { response } = await authApi.getUserInfo();
      Actions.setProfile(response);
      router.go(ROUTE_NAMES.CHATS);
    } catch (e) {
      console.error(e.response.reason);
    }
  }

  async getUser() {
    try {
      const { response } = await authApi.getUserInfo();
      Actions.setProfile(response);
    } catch (e) {
      console.error(e.response.reason);
    }
  }

  async logout() {
    await authApi.logout();
    router.go(ROUTE_NAMES.LOGIN);
    Actions.clearState();
  }
}

export const authController = new AuthController();
