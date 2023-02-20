import { HTTPTransport } from "../core";

export type ProfileRequestContract = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type PasswordRequestContract = {
  oldPassword: string;
  newPassword: string;
};

export class ProfileApi {
  _httpTransport: HTTPTransport;

  readonly baseUrl = "/user";
  readonly profileUrl = `${this.baseUrl}/profile`;
  readonly avatarUrl = `${this.profileUrl}/avatar`;
  readonly passwordUrl = `${this.baseUrl}/password`;
  readonly findByLoginUrl = `${this.baseUrl}/search`;

  constructor() {
    this._httpTransport = new HTTPTransport();
  }

  changeUserProfile(data: ProfileRequestContract) {
    return this._httpTransport.put(this.profileUrl, { data });
  }

  changeUserAvatar(data: FormData) {
    return this._httpTransport.put(this.avatarUrl, { data });
  }

  changeUserPassword(data: PasswordRequestContract) {
    return this._httpTransport.put(this.passwordUrl, { data });
  }

  getUserById(id: number) {
    return this._httpTransport.get(this.baseUrl, { data: { id } });
  }

  findUserByLogin(login: string) {
    return this._httpTransport.get(this.findByLoginUrl, { data: { login } });
  }
}

export const profileApi = new ProfileApi();
