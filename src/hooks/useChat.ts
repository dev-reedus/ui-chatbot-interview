import { useState } from "react";
import { MessageData } from "@/types/message.ts";
import { ChatService } from "@/services/chat-service.ts";

export const useChat = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: MessageData = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      type: "text",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsFirstMessage(false);

    const botResponse = await ChatService.generateBotResponse();
    setMessages((prev) => [...prev, botResponse]);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return {
    messages,
    inputValue,
    isFirstMessage,
    sendMessage,
    handleInputChange,
    handleKeyPress,
  };
};
