import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './pages/Home/container/HomeContainer';
import AccountContainer from './pages/Account/container/AccountContainer';
import LoginContainer from './pages/Login/container/LoginContainer';
import HeaderContainer from './components/common/Header/container/HeaderContainer';

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/account' element={<AccountContainer />} />
        <Route path='/login' element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
