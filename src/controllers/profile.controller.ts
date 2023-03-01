import {
  PasswordRequestContract,
  ProfileRequestContract,
  profileApi,
} from "../api";
import { Actions } from "../core";

class ProfileController {
  async updateProfile(data: ProfileRequestContract) {
    const { response } = await profileApi.changeUserProfile(data);
    Actions.setProfile(response);
  }

  async updateAvatar(data: FormData) {
    const { response } = await profileApi.changeUserAvatar(data);
    Actions.setProfile(response);
  }

  updatePassword(data: PasswordRequestContract) {
    profileApi.changeUserPassword(data);
  }
}

export const profileController = new ProfileController();
