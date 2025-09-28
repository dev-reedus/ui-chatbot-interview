import React from "react";
import { ChatInputProps } from "./chat-input.model.ts";

const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  onInputChange,
  onSendMessage,
  onKeyPress,
  isLoading,
  className = "",
}) => {
  return (
    <div
      className={`${className} sticky bottom-0 bg-gray-700 z-10 rounded-2xl`}
    >
      <div className="pb-4">
        <div className="px-4 py-4 hover:border-red-700 focus-within:border-red-700 border-2 border-gray-200 bg-white/40 rounded-2xl shadow-sm transition-all duration-200 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-3">
              <textarea
                name="home-message-input"
                value={inputValue}
                disabled={isLoading}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyDown={onKeyPress}
                placeholder="Type your message here..."
                className="flex-1 px-4 py-3 resize-none no-scrollbar focus:outline-none bg-transparent border-none"
              />
              <button
                onClick={onSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-red-700 hover:bg-red-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-6 py-2 rounded-xl transition-all duration-200 font-medium h-16 m-auto"
              >
                <div className="flex items-center">
                  Send
                  <span className="text-2xl ml-1">➤</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
