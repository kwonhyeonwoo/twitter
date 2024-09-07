import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './pages/Home/container/HomeContainer';
import AccountContainer from './pages/Account/container/AccountContainer';
import LoginContainer from './pages/Login/container/LoginContainer';
import HeaderContainer from './components/common/Header/container/HeaderContainer';
import { auth } from "./config/firebase";
import "./core/core.css";
import LayoutContainer from './components/Layout/container/LayoutContainer';
function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const init = async () => {
    await auth.authStateReady();
    setIsLogin(true)
  };

  useEffect(() => {
    init();
  }, []);
  console.log('first', isLogin)
  return (
    <BrowserRouter>
      {isLogin ? (
        <div className='main-wrapper'>
          <LayoutContainer />
          <Routes>
            <Route path='/' element={<HomeContainer />} />
          </Routes>
        </div>

      ) : (
        <Routes>
          <Route path='/account' element={<AccountContainer />} />
          <Route path='/login' element={<LoginContainer />} />
        </Routes>

      )}

    </BrowserRouter>
  );
}

export default App;
