import React from "react";
import type { HomeProps } from "./home.model.ts";
import ChatInput from "@/components/chat-input/chat-input.tsx";

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
        <ChatInput
          inputValue={inputValue}
          onInputChange={onInputChange}
          onSendMessage={onSendMessage}
          onKeyPress={onKeyPress}
          className={`[&>div]:p-0 [&&]:bg-transparent [&>div]shadow-lg [&_textarea]:text-lg [&>div]:focus:ring-red-700 [&_div]:bg-transparent`}
        />
      </div>
    </div>
  );
};

export default Home;
