import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path='/dashboard' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/signup' exact element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

const App = () => {
  return (
    <div>{routes}</div>
  )

};
export default App