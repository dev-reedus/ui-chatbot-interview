import React from "react";
import { ChatButtonProps } from "./chat-button.model.ts";
import chatIcon from "@/assets/chat.svg";
import closeChatIcon from "@/assets/close-chat.svg";

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
        <img src={closeChatIcon} alt="open chat" className="w-6 h-6" />
      ) : (
        <img src={chatIcon} alt="open chat" className="w-6 h-6" />
      )}
    </button>
  );
};

export default ChatButton;
