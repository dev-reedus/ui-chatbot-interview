export interface MessageData {
  id: number;
  text: string;
  type: "text" | "table" | "chart";
  sender: "user" | "bot";
  timestamp: Date;
}
