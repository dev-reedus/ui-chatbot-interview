import React from "react";
import { ChatInputProps } from "./chat-input.model.ts";

const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  onInputChange,
  onSendMessage,
  onKeyPress,
  isLoading,
}) => {
  return (
    <div className="sticky bottom-0 bg-gray-700 z-10">
      <div className="pb-4">
        <div className="px-4 py-4 hover:border-red-600 focus-within:border-red-600 border-2 border-gray-200 bg-white/40 rounded-2xl shadow-sm text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-3">
              <input
                type="text"
                disabled={isLoading}
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyPress={onKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 focus:outline-none"
              />
              <button
                onClick={onSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-red-700 hover:bg-red-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full transition-all duration-200 font-medium"
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
