import Chat from "@/views/chat/chat";
import Home from "@/views/home/home";
import { useChat } from "./hooks/useChat";

function App() {
  const {
    messages,
    inputValue,
    isFirstMessage,
    sendMessage,
    handleInputChange,
    handleKeyPress,
  } = useChat();

  return (
    <div className="w-full bg-gray-50">
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
          onInputChange={handleInputChange}
          onSendMessage={sendMessage}
          onKeyPress={handleKeyPress}
        />
      )}
    </div>
  );
}

export default App;
