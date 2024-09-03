import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './pages/Home/container/HomeContainer';
import AccountContainer from './pages/Account/container/AccountContainer';
import LoginContainer from './pages/Login/container/LoginContainer';
import HeaderContainer from './components/common/Header/container/HeaderContainer';
import { auth } from "./config/firebase";
import "./core/core.css";
function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const init = async () => {
    await auth.authStateReady();
    setIsLogin(false)
  };

  useEffect(() => {
    init();
  }, [])
  return (
    <BrowserRouter>
      <HeaderContainer />
      {isLogin ? (
        <div>
          Loading...
        </div>

      ) : (
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/account' element={<AccountContainer />} />
          <Route path='/login' element={<LoginContainer />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
