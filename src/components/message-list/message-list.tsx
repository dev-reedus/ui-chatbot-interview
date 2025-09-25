import React, { useEffect, useRef } from "react";
import Message from "@/components/message/message";
import { MessageData } from "@/types/message";

interface MessageListProps {
  messages: MessageData[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 min-h-0">
      <div className="max-w-4xl mx-auto space-y-4 h-full flex flex-col justify-start">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;
