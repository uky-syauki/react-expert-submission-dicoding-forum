import React from 'react';
import LoginInput from '../components/LoginInput';
import '../styles/auth.css';

function LoginPage() {

  const onLogin = ({ email, password }) => {
    alert(`Username: ${email}\nPassword: ${password}`);
  };

  return (
    <div className='auth-container'>
      <LoginInput login={onLogin} />
    </div>
  );
}

export default LoginPage;