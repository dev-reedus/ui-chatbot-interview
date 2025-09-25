import { MessageData } from "@/types/message.ts";

export class ChatService {
  static createBotMessage(text: string): MessageData {
    return {
      id: Date.now() + 1,
      text,
      sender: "bot",
      type: "text",
      timestamp: new Date(),
    };
  }

  static async generateBotResponse(): Promise<MessageData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const botResponse = this.createBotMessage(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt tincidunt, nisl nisl tincidunt nisl, eget tincidunt nisl nisl eget nisl.",
        );
        resolve(botResponse);
      }, 4000);
    });
  }
}
