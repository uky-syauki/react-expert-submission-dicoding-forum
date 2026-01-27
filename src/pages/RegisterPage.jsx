import React from 'react';
import RegisterInput from '../components/RegisterInput';
import '../styles/auth.css';

function RegisterPage() {

  const onRegister = ({ username, email, password }) => {
    alert(`Hello ${username} ${email} ${password}`);
  };

  return (
    <div className='auth-container'>
      <RegisterInput onRegister={onRegister} />
    </div>
  );
}

export default RegisterPage;