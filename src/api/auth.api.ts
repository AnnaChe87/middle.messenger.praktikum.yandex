import { HTTPTransport } from "../core";

export type SignupRequestContract = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SigninRequestContract = {
  login: string;
  password: string;
};

export type UserResponseContract = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
  role?: string;
};

class AuthApi {
  _httpTransport: HTTPTransport;
  private readonly baseUrl = "/auth";
  private readonly signupUrl = `${this.baseUrl}/signup`;
  private readonly signinUrl = `${this.baseUrl}/signin`;
  private readonly logoutUrl = `${this.baseUrl}/logout`;
  private readonly userUrl = `${this.baseUrl}/user`;

  constructor() {
    this._httpTransport = new HTTPTransport();
  }
  signup(data: SignupRequestContract) {
    return this._httpTransport.post(this.signupUrl, { data });
  }

  signin(data: SigninRequestContract) {
    return this._httpTransport.post(this.signinUrl, { data });
  }

  logout() {
    return this._httpTransport.post(this.logoutUrl, {});
  }

  getUserInfo() {
    return this._httpTransport.get(this.userUrl, {});
  }
}

export const authApi = new AuthApi();
