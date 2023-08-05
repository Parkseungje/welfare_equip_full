import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/body/swiper_main.css'
import { Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
// import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

const SwiperMain = () => {
    SwiperCore.use([Autoplay,Pagination]);

    const style = {
        width: "100%",
        position: "relative",
        left: "100px",
        top: "-5px",
        zIndex : 1
      };

    const mobileStyle = {
        width: "100%",
        position: "relative",
        left: "0px",
        top: "-5px",
    };

      
    return (
    <>
      <Swiper style={window.innerWidth <= 768 ? mobileStyle : style}
        
        pagination={{
          dynamicBullets: true,
          clickable: true,
          el: '.swiper-pagination',
        }}
        
        className="mySwiper"
        autoplay={{
            delay: 3000, // 3000밀리초(3초)로 딜레이 설정
            disableOnInteraction: false, // 사용자가 Swiper와 상호작용할 때에도 자동 스와이프를 허용
          }}
        loop={true}
      >
        <SwiperSlide>
            <div className='swiper-image'>
                <img src="/swiper_image/ozone.jpeg" alt="ozone" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-image'>
                <img src="/swiper_image/kbs_donghang.jpeg" alt="kbs" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-image'>
                <img src="/swiper_image/careman.jpeg" alt="careman" />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default SwiperMain;