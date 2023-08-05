import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header/dropdown.css'

const DropDown = () => {

    const [showMenu1, setShowMenu1] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);
    const [showMenu3, setShowMenu3] = useState(false);
    const [showMenu4, setShowMenu4] = useState(false);
    const [showMenu5, setShowMenu5] = useState(false);
    const [showMenu6, setShowMenu6] = useState(false);
    const [showMenu7, setShowMenu7] = useState(false);
    
    const handleMouseOver = (menuNumber) => {
        switch (menuNumber) {
            case 1:
                setShowMenu1(true);
              break;
            case 2:
                setShowMenu2(true);
              break;
            
            case 3:
                setShowMenu3(true);
              break;

            case 4:
                setShowMenu4(true);
              break;
            
            case 5:
                setShowMenu5(true);
              break;
              
            case 6:
                setShowMenu6(true);
              break;
                
            case 7:
                setShowMenu7(true);
              break;
          }
      };
  
      const handleMouseOut = (menuNumber) => {
        switch (menuNumber) {
            case 1:
                setShowMenu1(false);
              break;
            case 2:
                setShowMenu2(false);
              break;
            
            case 3:
                setShowMenu3(false);
              break;

            case 4:
                setShowMenu4(false);
              break;
            
            case 5:
                setShowMenu5(false);
              break;
              
            case 6:
                setShowMenu6(false);
              break;
                
            case 7:
                setShowMenu7(false);
              break;
          }
      };

      const handleMobileButtonClick = (menuNumber) => {
        switch (menuNumber) {
          case 1:
            setShowMenu1((prev) => !prev);
            break;
          case 2:
            setShowMenu2((prev) => !prev);
            break;
          case 3:
            setShowMenu3((prev) => !prev);
            break;
          case 4:
            setShowMenu4((prev) => !prev);
            break;
          case 5:
            setShowMenu5((prev) => !prev);
            break;
          case 6:
            setShowMenu6((prev) => !prev);
            break;
          case 7:
            setShowMenu7((prev) => !prev);
            break;
        }
    };

    return (
      <div className="container">
        <div
          className={`menu ${showMenu1 ? 'show-dropdown' : ''}`}
          onMouseOver={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOver(1)}
          onMouseOut={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOut(1)}
          onClick={() => window.matchMedia('(max-width: 768px)').matches && handleMobileButtonClick(1)}
        >
          <button>선한이웃복지용구</button>
          {showMenu1 && !window.matchMedia('(max-width: 768px)').matches && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">전동침대</Link>
              </li>
              <li>
                <Link to="/wheelchair">휠체어</Link>
              </li>
              <li>
                <Link to="/mattress">매트리스</Link>
              </li>
              <li>
                <Link to="/portable-bath">이동욕조</Link>
              </li>
            </ul>
          )}
        </div>
        {/* mobile */} 
        {showMenu1 && window.matchMedia('(max-width: 768px)').matches && (
            <div>
            <div className="dropdown-m">
                <Link to="/electric-bed">전동침대</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/wheelchair">휠체어</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/mattress">매트리스</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">이동욕조</Link>
            </div>
            </div>
          )}
        <div
          className={`menu ${showMenu2 ? 'show-dropdown' : ''}`}
          onMouseOver={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOver(2)}
          onMouseOut={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOut(2)}
          onClick={() => window.matchMedia('(max-width: 768px)').matches && handleMobileButtonClick(2)}
        >
          <button>급여대여</button>
          {showMenu2 && !window.matchMedia('(max-width: 768px)').matches &&(
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">전동침대</Link>
              </li>
              <li>
                <Link to="/wheelchair">휠체어</Link>
              </li>
              <li>
                <Link to="/mattress">욕창예방 매트리스</Link>
              </li>
              <li>
                <Link to="/portable-bath">배회감지기/이동욕조</Link>
              </li>
            </ul>
          )}
        </div>
        {/* mobile */} 
        {showMenu2 && window.matchMedia('(max-width: 768px)').matches && (
            <div>
            <div className="dropdown-m">
                <Link to="/electric-bed">전동침대</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/wheelchair">휠체어</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/mattress">매트리스</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">이동욕조</Link>
            </div>
            </div>
          )}
        <div
          className={`menu ${showMenu3 ? 'show-dropdown' : ''}`}
          onMouseOver={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOver(3)}
          onMouseOut={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOut(3)}
          onClick={() => window.matchMedia('(max-width: 768px)').matches && handleMobileButtonClick(3)}
        >
          <button>급여구입</button>
          {showMenu3 && !window.matchMedia('(max-width: 768px)').matches &&(
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">이동변기/간이변기</Link>
              </li>
              <li>
                <Link to="/wheelchair">목욕의자</Link>
              </li>
              <li>
                <Link to="/mattress">보행기</Link>
              </li>
              <li>
                <Link to="/portable-bath">지팡이</Link>
              </li>
              <li>
                <Link to="/portable-bath">안전손잡이</Link>
              </li>
              <li>
                <Link to="/portable-bath">방석</Link>
              </li>
              <li>
                <Link to="/portable-bath">자세변환용구</Link>
              </li>
              <li>
                <Link to="/portable-bath">방수시트</Link>
              </li>
              <li>
                <Link to="/portable-bath">요실금팬티</Link>
              </li>
            </ul>
          )}
        </div>
        {/* mobile */} 
        {showMenu3 && window.matchMedia('(max-width: 768px)').matches && (
            <div>
            <div className="dropdown-m">
                <Link to="/electric-bed">이동변기/간이변기</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/wheelchair">목욕의자</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/mattress">보행기</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">지팡이</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">안전손잡이</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">방석</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">자세변환용구</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">방수시트</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">요실금팬티</Link>
            </div>
            </div>
          )}
        <div
          className={`menu ${showMenu4 ? 'show-dropdown' : ''}`}
          onMouseOver={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOver(4)}
          onMouseOut={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOut(4)}
          onClick={() => window.matchMedia('(max-width: 768px)').matches && handleMobileButtonClick(4)}
        >
          <button>일반대여</button>
          {showMenu4 && !window.matchMedia('(max-width: 768px)').matches && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">1전동침대</Link>
              </li>
              <li>
                <Link to="/wheelchair">휠체어</Link>
              </li>
              <li>
                <Link to="/mattress">욕창예방 매트리스</Link>
              </li>
            </ul>
          )}
        </div>
        {/* mobile */} 
        {showMenu4 && window.matchMedia('(max-width: 768px)').matches && (
            <div>
                <div className="dropdown-m">
                    <Link to="/electric-bed">전동침대</Link>
                </div>
                <div className="dropdown-m">
                    <Link to="/wheelchair">휠체어</Link>
                </div>
                <div className="dropdown-m">
                    <Link to="/mattress">욕창예방 매트리스</Link>
                </div>
            </div>
          )}
        <div
          className={`menu ${showMenu5 ? 'show-dropdown' : ''}`}
          onMouseOver={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOver(5)}
          onMouseOut={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOut(5)}
          onClick={() => window.matchMedia('(max-width: 768px)').matches && handleMobileButtonClick(5)}
        >
          <button>일반구입</button>
          {showMenu5 && !window.matchMedia('(max-width: 768px)').matches && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">이동변기/간이변기</Link>
              </li>
              <li>
                <Link to="/wheelchair">목욕의자</Link>
              </li>
              <li>
                <Link to="/mattress">보행기</Link>
              </li>
              <li>
                <Link to="/portable-bath">지팡이</Link>
              </li>
              <li>
                <Link to="/portable-bath">안전손잡이</Link>
              </li>
              <li>
                <Link to="/portable-bath">방석</Link>
              </li>
              <li>
                <Link to="/portable-bath">자세변환용구</Link>
              </li>
              <li>
                <Link to="/portable-bath">방수시트</Link>
              </li>
              <li>
                <Link to="/portable-bath">요실금팬티</Link>
              </li>
            </ul>
          )}
        </div>
        {/* mobile */} 
        {showMenu5 && window.matchMedia('(max-width: 768px)').matches && (
            <div>
            <div className="dropdown-m">
                <Link to="/electric-bed">이동변기/간이변기</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/wheelchair">목욕의자</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/mattress">보행기</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">지팡이</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">안전손잡이</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">방석</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">자세변환용구</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">방수시트</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">요실금팬티</Link>
            </div>
            </div>
          )}
        <div
          className={`menu ${showMenu6 ? 'show-dropdown' : ''}`}
          onMouseOver={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOver(6)}
          onMouseOut={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOut(6)}
          onClick={() => window.matchMedia('(max-width: 768px)').matches && handleMobileButtonClick(6)}
        >
          <button>환자영양식</button>
          {showMenu6 && !window.matchMedia('(max-width: 768px)').matches && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">고소한 검은깨</Link>
              </li>
              <li>
                <Link to="/wheelchair">구수한맛</Link>
              </li>
              <li>
                <Link to="/mattress">오메가</Link>
              </li>
              <li>
                <Link to="/portable-bath">화이바</Link>
              </li>
            </ul>
          )}
        </div>
        {/* mobile */} 
        {showMenu6 && window.matchMedia('(max-width: 768px)').matches && (
            <div>
            <div className="dropdown-m">
                <Link to="/electric-bed">고소한 검은깨</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/wheelchair">구수한맛</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/mattress">오메가</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/portable-bath">화이바</Link>
            </div>
            </div>
          )}
        <div
          className={`menu ${showMenu7 ? 'show-dropdown' : ''}`}
          onMouseOver={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOver(7)}
          onMouseOut={() => !window.matchMedia('(max-width: 768px)').matches && handleMouseOut(7)}
          onClick={() => window.matchMedia('(max-width: 768px)').matches && handleMobileButtonClick(7)}
        >
          <button>고객지원</button>
          {showMenu7 && !window.matchMedia('(max-width: 768px)').matches && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">건강기능신발</Link>
              </li>
              <li>
                <Link to="/wheelchair">압박용밴드</Link>
              </li>
              <li>
                <Link to="/mattress">지팡이고무</Link>
              </li>
            </ul>
          )}
        </div>
        {/* mobile */} 
        {showMenu7 && window.matchMedia('(max-width: 768px)').matches && (
            <div>
            <div className="dropdown-m">
                <Link to="/electric-bed">건강기능신발</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/wheelchair">압박용밴드</Link>
            </div>
            <div className="dropdown-m">
                <Link to="/mattress">지팡이고무</Link>
            </div>
            </div>
          )}
      </div>
    );
};

export default DropDown;