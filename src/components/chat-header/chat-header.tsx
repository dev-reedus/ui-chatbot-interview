import React from "react";
import { HeaderProps } from "@/components/chat-header/chat-header.model.ts";
import backIcon from "@/assets/back.svg";
import chatIcon from "@/assets/chat.svg";
import closeIcon from "@/assets/close.svg";

const ChatHeader: React.FC<HeaderProps> = ({
  hasCloseIcon = false,
  onClose,
  hasBackIcon = false,
  onBack,
  className = "",
}) => {
  return (
    <div
      className={`shadow-lg px-6 py-2 sticky top-0 bg-gray-700 z-10" ${className}`}
    >
      <div className="flex items-center justify-between bg-gray-700">
        <div className="flex items-center space-x-3">
          {hasBackIcon && (
            <button
              onClick={onBack}
              className="text-gray-400 hover:bg-none transition-colors p-1 rounded-full"
              aria-label="Close chat"
            >
              <img src={backIcon} alt="back icon" />
            </button>
          )}
          <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
            <img alt="chat placeholder" src={chatIcon} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-red-700">ChatBot</h2>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
        {hasCloseIcon && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-600"
            aria-label="Close chat"
          >
            <img src={closeIcon} alt="close icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
