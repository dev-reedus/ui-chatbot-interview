import React from "react";
import ChatHeader from "@/components/chat-header/chat-header";
import MessageList from "@/components/message-list/message-list";
import ChatInput from "@/components/chat-input/chat-input";
import { ChatProps } from "./chat.model.ts";

const Chat: React.FC<ChatProps> = ({
  messages,
  inputValue,
  onInputChange,
  isLoading,
  onSendMessage,
  onKeyPress,
  onBack,
}) => {
  return (
    <div className="h-screen flex flex-col">
      <ChatHeader hasBackIcon onBack={onBack} />
      <div className="lg:w-1/2 md:w-100 m-auto bg-gray-700 mt-2 flex-1 flex flex-col">
        <MessageList messages={messages} />
        <ChatInput
          isLoading={isLoading}
          inputValue={inputValue}
          onInputChange={onInputChange}
          onSendMessage={onSendMessage}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

export default Chat;
