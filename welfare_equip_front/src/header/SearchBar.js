import React, { useState } from 'react';
import '../css/header/searchbar.css'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // 검색 버튼이나 엔터키 등을 눌렀을 때 검색 동작을 수행하는 함수를 호출하는 코드를 추가하세요.
    console.log('검색어:', searchQuery);
  };

  return (
    <form className='searchbar' onSubmit={handleSearchSubmit}>
      <input 
        type="text"
        placeholder="검색어 입력"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button type="submit">검색</button>
    </form>
  );
};

export default SearchBar;
