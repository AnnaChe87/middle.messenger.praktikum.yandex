import {
  PasswordRequestContract,
  ProfileRequestContract,
  profileApi,
} from "../api";
import { STORE_KEYS, store } from "../core/Store";

class ProfileController {
  async updateProfile(data: ProfileRequestContract) {
    const { response } = await profileApi.changeUserProfile(data);
    store.setState(STORE_KEYS.CURRENT, response);
  }

  async updateAvatar(data: FormData) {
    const { response } = await profileApi.changeUserAvatar(data);
    store.setState(STORE_KEYS.CURRENT, response);
  }

  updatePassword(data: PasswordRequestContract) {
    profileApi.changeUserPassword(data);
  }
}

export const profileController = new ProfileController();
