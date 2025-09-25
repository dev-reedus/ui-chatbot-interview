import React from "react";
import { ChatInputProps } from "./chat-input.model.ts";

const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  onInputChange,
  onSendMessage,
  onKeyPress,
}) => {
  return (
    <div className="sticky bottom-0 bg-gray-50 z-10 pb-4">
      <div className="px-4 py-4 border-2 border-gray-200 bg-white rounded-2xl shadow-sm ">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyPress={onKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-100 rounded-full focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all duration-200"
            />
            <button
              onClick={onSendMessage}
              disabled={!inputValue.trim()}
              className="bg-red-700 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full transition-all duration-200 font-medium"
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
  );
};

export default ChatInput;
