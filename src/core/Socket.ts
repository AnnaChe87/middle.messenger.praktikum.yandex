import { Actions } from ".";

const WS_URL = "wss://ya-praktikum.tech/ws/chats";

export type SocketMessageContract = {
  chat_id: number;
  content: string;
  id: number;
  is_read: true;
  time: string;
  type: "message" | "user connected";
  user_id: number;
};

export class Socket {
  socket: WebSocket | null;
  constructor(userId: number, chatId: number, token: string) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this._disconnect();
    }

    this.socket = new WebSocket(`${WS_URL}/${userId}/${chatId}/${token}`);
    this._init();
  }

  _disconnect() {
    this.socket?.close();
    this.socket = null;
  }
  _init() {
    this.socket?.addEventListener("open", () => {
      this.send({
        content: "0",
        type: "get old",
      });
    });

    this.socket?.addEventListener("close", (event) => {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket?.addEventListener("message", (event) => {
      try {
        const data = JSON.parse(event.data) as SocketMessageContract;
        if (data.type === "user connected") return;

        const messages = Array.isArray(data) ? data : [data];
        messages.sort(
          (left, right) =>
            new Date(left.time).getTime() - new Date(right.time).getTime()
        );

        Actions.setMessages(messages);
      } catch (e) {
        console.error(`При парсинге данных произошла ошибка ${e}`);
      }
    });
  }

  send(data: any) {
    this.socket?.send(JSON.stringify(data));
  }

  message(message: string) {
    this.send({
      content: message,
      type: "message",
    });
  }
}
