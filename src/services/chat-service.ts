import { MessageData } from "@/types/message.ts";
import { tableData } from "@/consts/tableData.ts";
import { chartData } from "@/consts/chartData.ts";

export class ChatService {
  static createTextMessage(): MessageData {
    return {
      id: `text-${Date.now()}`,
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt tincidunt, nisl nisl tincidunt nisl, eget tincidunt nisl nisl eget nisl.",
      sender: "bot",
      type: "text",
      timestamp: new Date(),
    };
  }

  static createErrorMessage(): MessageData {
    return {
      id: `error-${Date.now()}`,
      data: "Failed to get bot response. Please try again.",
      sender: "bot",
      type: "error",
      timestamp: new Date(),
    };
  }

  static createTableMessage(): MessageData {
    return {
      id: `table-${Date.now()}`,
      data: tableData,
      sender: "bot",
      type: "table",
      timestamp: new Date(),
    };
  }

  static createChartMessage(): MessageData {
    return {
      id: `chart-${Date.now()}`,
      data: chartData,
      sender: "bot",
      type: "chart",
      timestamp: new Date(),
    };
  }

  static async generateBotResponse(inputValue: string): Promise<MessageData> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (inputValue.toLowerCase()) {
          case "elenca gli ultimi utenti":
          case "show me the last users":
            resolve(this.createTableMessage());
            break;
          case "mostrami le vendite mensili":
          case "show me the monthly sales":
            resolve(this.createChartMessage());
            break;
          case "mostrami un errore":
          case "show me an error":
            reject(this.createErrorMessage());
            break;
          default:
            resolve(this.createTextMessage());
        }
      }, 4000);
    });
  }
}
