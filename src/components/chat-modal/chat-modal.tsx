import React from "react";
import MessageList from "@/components/message-list/message-list";
import ChatInput from "@/components/chat-input/chat-input";
import { ModalChatProps } from "@/components/chat-modal/chat-modal.model.ts";
import { useChat } from "@/hooks/useChat.ts";
import ChatHeader from "@/components/chat-header/chat-header.tsx";

const ModalChat: React.FC<ModalChatProps> = ({ onClose }) => {
  const {
    messages,
    inputValue,
    sendMessage,
    isLoading,
    handleInputChange,
    handleKeyPress,
  } = useChat();
  return (
    <div className="w-full h-full rounded-2xl bg-gray-800 shadow-2xl flex flex-col">
      <ChatHeader
        hasCloseIcon={true}
        onClose={onClose}
        className={"rounded-2xl"}
      />
      <div className="flex-1 min-h-0 bg-gray-800 flex-1 flex flex-col">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-400 p-6">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <img alt="chat placeholder" src={"src/assets/chat.svg"} />
              </div>
              <p className="text-sm">Start a conversation!</p>
              <p className="text-xs mt-1">Ask me anything to get started.</p>
            </div>
          </div>
        ) : (
          <MessageList messages={messages} />
        )}
      </div>

      <div className="mt-5">
        <ChatInput
          className={"bg-gray-800 [&&]:pb-0 rounded-2xl "}
          isLoading={isLoading}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSendMessage={sendMessage}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default ModalChat;
