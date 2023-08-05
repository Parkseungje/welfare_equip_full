// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './header/Home';
import MyPage from './header/MyPage';
import OrderHistory from './header/OrderHistory';
import Cart from './header/Cart';
import Login from './header/Login';
import Signup from './header/Signup';
import MainImage from './header/MainImage';
import SearchBar from './header/SearchBar';
import DropDown from './header/DropDown';

import './App.css'; // App.css에서 스타일을 정의합니다.

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="left-menu">
          <Link to="/">홈</Link>
          <Link to="/mypage">마이페이지</Link>
          <Link to="/order_history">주문내역</Link>
          <Link to="/cart">장바구니</Link>
        </div>
        <div className="right-menu">
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
      <div>
        <Link to="/"><MainImage /></Link> 
      </div>
      <div>
        <SearchBar />
      </div>
      <hr />
      <DropDown />
      <hr />
      
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/order_history" element={<OrderHistory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/electric-bed" component={() => <div>전동침대 페이지</div>} />
        <Route path="/wheelchair" component={() => <div>휠체어 페이지</div>} />
        <Route path="/mattress" component={() => <div>매트리스 페이지</div>} />
        <Route path="/portable-bath" component={() => <div>이동욕조 페이지</div>} />
      </Routes>
    </Router>
  );
};

export default App;
