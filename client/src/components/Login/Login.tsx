import React from 'react';
import { useAuth } from 'src/context/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth(); 

  return (
    <div className="login-container">
      <button onClick={login}>Login with Google</button>
    </div>
  );
};

export default Login;
