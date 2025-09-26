import Chat from "@/views/chat/chat";
import Home from "@/views/home/home";
import { useChat } from "./hooks/useChat";

function App() {
  const {
    messages,
    inputValue,
    isFirstMessage,
    sendMessage,
    isLoading,
    handleInputChange,
    handleKeyPress,
  } = useChat();

  return (
    <div className="w-full bg-gray-700">
      {isFirstMessage ? (
        <Home
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSendMessage={sendMessage}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <Chat
          messages={messages}
          inputValue={inputValue}
          isLoading={isLoading}
          onInputChange={handleInputChange}
          onSendMessage={sendMessage}
          onKeyPress={handleKeyPress}
        />
      )}
    </div>
  );
}

export default App;
