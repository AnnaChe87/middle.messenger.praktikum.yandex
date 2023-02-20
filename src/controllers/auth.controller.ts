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
    await authApi.signup(data);
    router.go(ROUTE_NAMES.CHATS);
  }

  async signin(data: SigninRequestContract) {
    await authApi.signin(data);
    const { response } = await authApi.getUserInfo();
    Actions.setProfile(response);
    router.go(ROUTE_NAMES.CHATS);
  }

  async getUser() {
    const { response } = await authApi.getUserInfo();
    Actions.setProfile(response);
  }

  async logout() {
    await authApi.logout();
    router.go(ROUTE_NAMES.LOGIN);
    Actions.clearState();
  }
}

export const authController = new AuthController();
