import React from "react";
import { MessageData } from "@/types/message";

export interface ChatProps {
  messages: MessageData[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isLoading?: boolean;
}
