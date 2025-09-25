import React from "react";
import { MessageComponentProps } from "./message.model";

const Message: React.FC<MessageComponentProps> = ({ message }) => {
  return (
    <div
      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          message.sender === "user"
            ? "bg-red-700 text-white rounded-tr-sm"
            : "bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm"
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <p
          className={`text-xs mt-1 ${
            message.sender === "user" ? "text-white-100" : "text-gray-600"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default Message;
