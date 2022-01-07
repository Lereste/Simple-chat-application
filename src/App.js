import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="2d4eab52-f897-43fe-ba5c-31f3836faf14"
      userName="Lereste"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => (
        <ChatFeed
          {...chatAppProps}
        />
      )}
    />
  )
}

export default App;