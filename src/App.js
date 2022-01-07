import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="2d4eab52-f897-43fe-ba5c-31f3836faf14"
      userName={localStorage.getItem('userName')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => (
        <ChatFeed
          {...chatAppProps}
        />
      )}
    />
  )
}

export default App;