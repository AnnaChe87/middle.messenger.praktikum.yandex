import { ChatResponseContract, UserResponseContract } from "../api";
import { EventBus } from "./EventBus";

export enum EVENTS {
  UPDATE = "UPDATE",
  UPDATE_CHATS = "UPDATE_CHATS",
  UPDATE_CURRENT_CHAT = "UPDATE_CURRENT_CHAT",
  UPDATE_MESSAGES = "UPDATE_MESSAGES",
}

export enum STORE_KEYS {
  CURRENT = "current",
  CHATS = "chats",
  CURRENT_CHAT = "currentChat",
  MESSAGES = "messages",
}

type CurrentChatStore = {
  token: string;
  id: number;
  users: Record<number, UserResponseContract>;
};

type StoreState = {
  [STORE_KEYS.CURRENT]: UserResponseContract | null;
  [STORE_KEYS.CHATS]: ChatResponseContract[];
  [STORE_KEYS.CURRENT_CHAT]: CurrentChatStore | null;
  [STORE_KEYS.MESSAGES]: any[];
};

const STATE_DEFAULT: StoreState = {
  [STORE_KEYS.CURRENT]: null,
  [STORE_KEYS.CHATS]: [],
  [STORE_KEYS.CURRENT_CHAT]: null,
  [STORE_KEYS.MESSAGES]: [],
};

export class Store extends EventBus<EVENTS> {
  static _instance: Store;
  static STORE_NAME = "myStore";

  _state: StoreState = STATE_DEFAULT;

  constructor() {
    if (Store._instance) {
      return Store._instance;
    }

    super();

    const savedState = localStorage.getItem(Store.STORE_NAME);

    this._state = savedState ? JSON.parse(savedState) ?? {} : STATE_DEFAULT;

    Store._instance = this;

    this.on(EVENTS.UPDATE, () => {
      localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state));
    });
  }

  getState(): StoreState {
    return this._state;
  }

  setState(name: keyof StoreState, value: any) {
    this._state[name] = value;

    this.emit(EVENTS.UPDATE);

    return this;
  }

  clearState() {
    this._state = STATE_DEFAULT;
    this.emit(EVENTS.UPDATE);
  }
}
