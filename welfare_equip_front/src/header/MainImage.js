// 이미지를 public 폴더에 저장한 경우
import React from 'react';
import '../css/header/main_img.css';

const MainImage = () => {
  return (
    <div className='main-image'>
      <img src="/main_image/carevillege_thumbnail.jpeg" alt="main_image" />
    </div>
  );
};

export default MainImage;
