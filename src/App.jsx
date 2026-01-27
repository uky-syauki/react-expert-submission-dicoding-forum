import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const authUser = true;
  const isPreload = false;

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <main>
          <Routes>
            <Route path='/*' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <div className='app-container'>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;