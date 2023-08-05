import React, { useState } from 'react';
import '../css/header/login.css';

const Login = () => {

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Userid:', userid);
    console.log('Password:', password);
    // 로그인 처리 로직을 추가할 수 있습니다.
  };

  const style = {
    margin : "20px",
  };

  return (
      <div style={style}>
        <div>
          <h1>로그인</h1>
        </div>
        <hr />
        <div className="App">
          <form onSubmit={handleLogin} className="login-form">
            <h2>Login</h2>
            <br />
            <div>
              <label>ID:</label>
              <input
                  type="text"
                  value={userid}
                  onChange={(e) => setUserid(e.target.value)}
                  required
              />
            </div>
            <div>
              <label>PASSWORD:</label>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
  );
};

export default Login;
