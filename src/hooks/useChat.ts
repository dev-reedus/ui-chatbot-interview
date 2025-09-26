import { useState } from "react";
import { MessageData } from "@/types/message.ts";
import { ChatService } from "@/services/chat-service.ts";

export const useChat = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: MessageData = {
      id: `user-${Date.now()}`,
      data: inputValue,
      sender: "user",
      type: "text",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsFirstMessage(false);
    setIsLoading(true);

    const loadingMessage: MessageData = {
      id: `loading-${Date.now()}`,
      data: "",
      sender: "bot",
      type: "loading",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const botResponse = await ChatService.generateBotResponse(
        inputValue.trim(),
      );
      setMessages((prev) => prev.slice(0, -1).concat(botResponse));
    } catch (error: unknown) {
      setMessages((prev) => prev.slice(0, -1).concat(error as MessageData));
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setIsFirstMessage(true);
    setInputValue("");
  };

  return {
    messages,
    inputValue,
    isFirstMessage,
    isLoading,
    sendMessage,
    handleInputChange,
    handleKeyPress,
    resetChat,
  };
};
