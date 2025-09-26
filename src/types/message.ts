import { TableData } from "@/components/message/table-message/table-message.model.ts";
import { ChartData } from "@/components/message/chart-message/chart-message.model.ts";

export interface MessageData {
  id: string;
  data: string | TableData | ChartData;
  type: "text" | "table" | "chart" | "loading" | "error";
  sender: "user" | "bot";
  timestamp: Date;
}
