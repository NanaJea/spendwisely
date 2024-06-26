import { useState } from 'react';
import { useSession } from 'next-auth/react';

const Chat = () => {
  const { data: session } = useSession();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    // FR Ajouter la logique pour envoyer le message au backend
    // EN Add the logic to send the message to the backend
    setMessages([...messages, message]);
    setMessage('');
  };

  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h1 className="text-2xl font-bold mb-5">Chat with Developer</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="Type your message..."
          ></textarea>
        </div>
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Chat History</h2>
          {messages.map((msg, index) => (
            <p key={index} className="bg-gray-200 p-2 rounded mb-2">{msg}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
