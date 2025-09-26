import Chat from "@/views/chat/chat";
import Home from "@/views/home/home";
import { useChat } from "./hooks/useChat";
import { useModal } from "@/hooks/useModal.ts";
import ModalChat from "@/components/chat-modal/chat-modal.tsx";
import Modal from "@/components/modal/modal.tsx";
import ChatButton from "@/components/chat-button/chat-button.tsx";

function App() {
  const {
    messages,
    inputValue,
    isFirstMessage,
    sendMessage,
    isLoading,
    handleInputChange,
    handleKeyPress,
    resetChat,
  } = useChat();
  const { isOpen, toggleModal, closeModal } = useModal();

  return (
    <>
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
            onBack={resetChat}
          />
        )}
      </div>
      {isFirstMessage && <ChatButton onClick={toggleModal} isOpen={isOpen} />}

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        position={"right"}
        className="lg:max-w-1/3 sm:w-full sm:max-w-full w-full lg:mx-4"
      >
        <ModalChat onClose={closeModal} />
      </Modal>
    </>
  );
}

export default App;
