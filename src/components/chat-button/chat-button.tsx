import React from "react";
import { ChatButtonProps } from "./chat-button.model.ts";

const ChatButton: React.FC<ChatButtonProps> = ({ onClick, isOpen = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-40
        w-14 h-14 rounded-full shadow-lg
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        ${
          isOpen ? "bg-red-600 hover:bg-red-700" : "bg-red-700 hover:bg-red-800"
        }
      `}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? (
        <img
          src={"src/assets/close-chat.svg"}
          alt="open chat"
          className="w-6 h-6"
        />
      ) : (
        <img src={"src/assets/chat.svg"} alt="open chat" className="w-6 h-6" />
      )}
    </button>
  );
};

export default ChatButton;
