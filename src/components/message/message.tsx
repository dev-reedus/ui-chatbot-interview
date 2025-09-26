import React from "react";
import { MessageComponentProps } from "./message.model";
import TableMessage from "./table-message/table-message";
import { TableData } from "./table-message/table-message.model.ts";
import { ChartData } from "@/components/message/chart-message/chart-message.model.ts";
import ChartMessage from "@/components/message/chart-message/chart-message.tsx";

const Message: React.FC<MessageComponentProps> = ({ message }) => {
  const renderMessageContent = () => {
    if (message.type === "loading") {
      return (
        <div className="flex space-x-1 items-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
          {message.data && typeof message.data === "string" && (
            <span className="text-white text-sm ml-2">{message.data}</span>
          )}
        </div>
      );
    }

    if (
      message.type === "table" &&
      typeof message.data === "object" &&
      message.data !== null
    ) {
      const tableData = message.data as TableData;
      return (
        <>
          <TableMessage data={tableData} className="mb-2" />
          <p className="text-xs mt-1 text-white-100">
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </>
      );
    }

    if (
      message.type === "chart" &&
      typeof message.data === "object" &&
      message.data !== null
    ) {
      const chartData = message.data as ChartData;
      return (
        <>
          <ChartMessage data={chartData} className="mb-2" />
          <p className="text-xs mt-1 text-white-100">
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </>
      );
    }

    return (
      <>
        <p
          className={`text-sm ${message.type === "error" ? "text-red-500" : ""}`}
        >
          {typeof message.data === "string"
            ? message.data
            : JSON.stringify(message.data)}
        </p>
        <p
          className={`text-xs mt-1 text-white-100 ${message.type === "error" ? "text-red-500" : ""}`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </>
    );
  };

  return (
    <div
      className={`flex
       ${message.sender === "user" ? "justify-end slide-in-from-right" : "justify-start slide-in-from-left"}`}
    >
      <div
        className={`${message.type === "table" || message.type === "chart" ? "lg:max-w-4xl max-w-xs" : "max-w-xs lg:max-w-md"} px-4 py-4 rounded-2xl
        ${
          message.sender === "user"
            ? "bg-red-700/50 text-white rounded-tr-sm"
            : "bg-white/20 text-white  rounded-bl-sm shadow-sm"
        }`}
      >
        {renderMessageContent()}
      </div>
    </div>
  );
};

export default Message;
