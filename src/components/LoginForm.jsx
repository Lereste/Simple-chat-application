import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      'Project-ID': "2d4eab52-f897-43fe-ba5c-31f3836faf14",
      'User-Name': username,
      'User-Secret': password,
    }

    try {
      // username | password => chatengine --> give message
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      // when success --> logged in
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (error) {
      setError('Your username or password is incorrect, please try again')
    }
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input" placeholder="User name" required />

          <input type="password" value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input" placeholder="Password" required />

          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>

          <h3 className="error">{error}</h3>
        </form>
      </div>
    </div >
  )
}

export default LoginForm