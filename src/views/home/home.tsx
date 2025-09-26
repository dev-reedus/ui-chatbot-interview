import React from "react";
import type { HomeProps } from "./home.model.ts";

const Home: React.FC<HomeProps> = ({
  inputValue,
  onInputChange,
  onSendMessage,
  onKeyPress,
}) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-500 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-red-700"> ChatBot </span>
          </h1>
          <p className="text-lg text-gray-100">
            Start your conversation by typing a message below
          </p>
        </div>

        <div className="relative text-gray-50">
          <input
            type="text"
            name="home-message-input"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={onKeyPress}
            placeholder="Type your message here..."
            className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-red-700 focus:ring-4 focus:ring-red-700 transition-all duration-200 shadow-lg"
          />
          <button
            onClick={onSendMessage}
            disabled={!inputValue.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-700 hover:bg-red-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-6 py-2 rounded-xl transition-all duration-200 font-medium"
          >
            <div className="flex items-center">
              Send
              <span className="text-2xl ml-1">➤</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
