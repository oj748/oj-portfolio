import Chat from '../components/Chat';

export default function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor: '#f9fafb'}}>
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8 mt-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4" style={{color: '#7c3aed'}}>
            Chat with Ojaswini
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ask me anything about my skills, projects, experience, or just have a conversation! 
            I'm here to help you learn more about my background and interests.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Chat />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            💡 <strong>Tip:</strong> Try asking about my academic skills, projects, or musical background!
          </p>
        </div>
      </main>
    </div>
  );
}
