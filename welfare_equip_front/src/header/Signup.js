import React, { useState } from 'react';
import PopupDom from './popup/PopupDom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PopupPostCode from './popup/PopupPostCode';
import '../css/header/signup.css'

const Signup = () => {

  const [inputs, setInputs] = useState({
    member_div: "",
    member_id: "",
    member_pw: "",
    password_answer: "",
    member_name: "",
    member_addr1: "",
    member_addr2: "",
    member_addr3: "",
    ph1: "",
    ph2: "",
    ph3: "",
})

  const {
      member_div, member_id, member_pw, password_answer,
      member_name, member_addr1, member_addr2, member_addr3,
      ph1, ph2, ph3
  } = inputs;

  const onChange = e => {
    setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버로 회원가입 정보를 전송하는 코드를 작성합니다.
    // 예를 들면, axios 또는 fetch를 사용하여 서버로 POST 요청을 보낼 수 있습니다.
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id:member_id}), // JSON 데이터를 문자열로 변환하여 body에 설정합니다.
    })
    .then(res => {
      if(res.status === 200) {
          alert("회원가입이 완료되었습니다.")
          window.location.href = "/"
      }else if(res.status === 400) {
          alert("로그인이 필요한 서비스 입니다.")
          
      }
  }).catch(err => console.log("err: ", err))
  };

  // 우편번호 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 우편번호 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 우편번호 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

  
  const style = {
    margin : "20px",
  };

  const labelDiv1 = {
    border : "none",
    display : "inline-block",
    padding : "5px",
    paddingLeft : "25px",
    marginTop : "10px",
    backgroundColor : "#CACACA",
    color : "white",
    width : "200px"
  };

  const labelDiv2 = {
    border : "none",
    display : "inline-block",
    padding : "5px",
    paddingLeft : "25px",
    marginTop : "10px",
    backgroundColor : "#CACACA",
    color : "white",
    width : "360px"
  };

  const labelDiv3 = {
    border : "none",
    display : "inline-block",
    padding : "5px",
    paddingLeft : "25px",
    marginTop : "10px",
    backgroundColor : "#CACACA",
    color : "white",
    width : "130px"
  };

  const labelDiv4 = {
    border : "none",
    display : "inline-block",
    padding : "5px",
    paddingLeft : "25px",
    marginTop : "10px",
    backgroundColor : "#CACACA",
    color : "white",
    width : "340px"
  };

  const labelFont = {
    fontSize : "30px",
  };

  const container = {
    border: "2px solid black",
    width: "100%",
    height: "200px",
    overflow: "auto",
  };

  const joinButton = {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
  };
  

  return (
  console.log(member_id),
    <>
    <form onSubmit={handleSubmit}>
    <div style={style}>
      <div>
        <h1>회원가입</h1>
      </div>
      <hr />
      <div style={labelDiv1}>
        <span style={labelFont}>Member Type</span>
      </div>
      <div style={{marginTop:"10px"}}>
        <span>가입하실 회원구분을 선택해주세요</span>
      </div>
      <div style={{marginTop:"40px", marginBottom:"40px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>회원구분</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"100px"}}>
          <input name='member_div' type='radio' checked value="1"></input><span>개인회원</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"50px"}}>
          <input name='member_div' type='radio' value="0"></input><span>사업자회원</span>
        </div>
      </div>
      <hr />
      <div style={labelDiv2}>
        <span style={labelFont}>Member Basic Information</span>
      </div>
      <div style={{marginTop:"10px"}}>
        <span>회원가입을 위해 필요한 기본정보입니다. 회원님 정보는 동의없이 사용하지 않습니다.</span>
      </div>
      <div style={{marginTop:"40px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>아이디</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"100px"}}>
          <input id="member_id" name='member_id' value={member_id} onChange={onChange}></input>
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>비밀번호</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"86px"}}>
          <input id='member_pw' name='member_pw' value={member_pw} onChange={onChange}></input>
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>비밀번호 확인</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"53px"}}>
          <input></input>
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>비밀번호 확인질문</span><span style={{color:"red"}}>*</span>
          <select id="password_question" name="password_question" style={{marginLeft:"25px",height:"25px",width:"280px"}}>
            <option value="hint_01">기억에 남는 추억의 장소는?</option>
            <option value="hint_02">자신의 인생 좌우명은?</option>
            <option value="hint_03">자신의 보물 제1호는?</option>
            <option value="hint_04">가장 기억에 남는 선생님 성함은?</option>
            <option value="hint_05">타인이 모르는 자신만의 신체비밀이 있다면?</option>
            <option value="hint_06">추억하고 싶은 날짜가 있다면?</option>
            <option value="hint_07">받았던 선물 중 기억에 남는 독특한 선물은?</option>
            <option value="hint_08">유년시절 가장 생각나는 친구 이름은?</option>
            <option value="hint_09">인상 깊게 읽은 책 이름은?</option>
            <option value="hint_10">읽은 책 중에서 좋아하는 구절이 있다면?</option>
            <option value="hint_11">자신이 두번째로 존경하는 인물은?</option>
            <option value="hint_12">친구들에게 공개하지 않은 어릴 적 별명이 있다면?</option>
            <option value="hint_13">초등학교 때 기억에 남는 짝꿍 이름은?</option>
            <option value="hint_14">다시 태어나면 되고 싶은 것은?</option>
            <option value="hint_15">내가 좋아하는 캐릭터는?</option>
          </select>
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>비밀번호 확인답변</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"27px"}}>
          <input style={{width:"280px"}} id='password_answer' name='password_answer' value={password_answer} onChange={onChange}></input>
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>이름</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"113px"}}>
          <input id='member_name' name='member_name' value={member_name} onChange={onChange}></input>
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>주소</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"113px", marginRight:"10px"}}>
          <input style={{width:"60px"}} id='member_addr1' name='member_addr1' value={member_addr1} onChange={onChange}></input>
        </div>
        <span style={{}}>-</span>
        <div style={{display:"inline-block", marginLeft:"10px"}}>
          <button type='button' onClick={openPostCode}>우편번호</button>
          <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                )}
          </div>
        </div>
        <div style={{marginTop:"10px", marginBottom:"10px"}}>
          <div style={{display:"inline-block", marginLeft:"157px"}}>
            <input style={{width:"280px"}} id='member_addr2' name='member_addr2' value={member_addr2} onChange={onChange}></input>
          </div>
        </div>
        <div style={{marginTop:"10px", marginBottom:"20px"}}>
          <div style={{display:"inline-block", marginLeft:"157px"}}>
            <input style={{width:"280px"}} id='member_addr3' name='member_addr3' value={member_addr3} onChange={onChange}></input>
          </div>
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>휴대전화</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"85px", marginRight:"10px"}}>
          <input name='ph1' style={{width:"70px"}} value={ph1} onChange={onChange}></input>
        </div>
        <span>-</span>
        <div style={{display:"inline-block", marginLeft:"10px", marginRight:"10px"}}>
          <input name='ph2' style={{width:"70px"}} value={ph2} onChange={onChange}></input>
        </div>
        <span>-</span>
        <div style={{display:"inline-block", marginLeft:"10px"}}>
          <input name='ph3' style={{width:"70px"}} value={ph3} onChange={onChange}></input>
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>SMS 수신여부</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"50px"}}>
          <input id="is_sms" name="is_sms" value="1" type="checkbox"></input>
          <span>동의함</span>
          <br />
            쇼핑몰에서 제공하는 다양한 혜택 및 정보를 SMS로 받아보실 수 있습니다.
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>이메일</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"100px"}}>
          <input></input>
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>이메일 수신여부</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"50px"}}>
          <input id="is_email" name="is_email" value="1" type="checkbox"></input>
          <span>동의함</span>
          <br />
            쇼핑몰에서 제공하는 다양한 혜택 및 정보를 이메일로 받아보실 수 있습니다.
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>생년월일</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"100px"}}>
          <input id='member_age' name='member_age' style={{width:"70px"}} /> 년 <input style={{width:"40px"}} /> 월 <input style={{width:"40px"}} /> 일
        </div>
      </div>
      <hr />
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>지역</span>
          <select id="location" name="location" style={{marginLeft:"130px",height:"25px",width:"100px"}}>
            <option value="" selected="selected">선택</option>
            <option value="region_01">경기</option>
            <option value="region_02">서울</option>
            <option value="region_03">인천</option>
            <option value="region_04">강원</option>
            <option value="region_05">충남</option>
            <option value="region_06">충북</option>
            <option value="region_07">대전</option>
            <option value="region_08">경북</option>
            <option value="region_09">경남</option>
            <option value="region_10">대구</option>
            <option value="region_11">부산</option>
            <option value="region_12">울산</option>
            <option value="region_13">전북</option>
            <option value="region_14">전남</option>
            <option value="region_15">광주</option>
            <option value="region_15_01">세종</option>
            <option value="region_16">제주</option>
          </select>
        </div>
      </div>
      <hr />
      <div style={labelDiv3}>
        <span style={labelFont}>이용약관</span>
      </div>
      <div style={{marginTop:"10px", marginBottom:"40px"}}>
        <span>저희 쇼핑몰 이용약관입니다. 읽고 동의해주세요.</span>
      </div>
      <div style={container}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!Lorem
      </div>
      <div style={{display:"inline-block", marginLeft:"5px", marginBottom:"30px"}}>
          <span>이용약관에 동의하십니까? </span>
          <input value="1" type="checkbox"></input>
          <span>동의함</span>
      </div>
      <hr />
      <div style={labelDiv4}>
        <span style={labelFont}>개인정보 수집 및 이용 동의</span>
      </div>
      <div style={{marginTop:"10px", marginBottom:"40px"}}>
        <span>개인정보 수집 및 이용약관을 읽고 동의해주세요.</span>
      </div>
      <div style={container}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam,
      nostrum sed vitae corporis quis quia deleniti quod doloremque consequuntur
      eius magni consectetur earum doloribus. Sapiente voluptas rem dignissimos
      repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Blanditiis quidem laborum laboriosam rerum vitae dignissimos dolores
      dolorum pariatur. Repudiandae unde nam, quae alias deleniti numquam
      exercitationem omnis atque in praesentium!Lorem
      </div>
      <div style={{display:"inline-block", marginLeft:"5px", marginBottom:"30px"}}>
          <span>개인정보 수집 및 이용에 동의하십니까? </span>
          <input value="1" type="checkbox"></input>
          <span>동의함</span>
      </div>
      <div style={joinButton}>
        <button onClick={handleSubmit} type='button' style={{marginLeft:"10px",marginBottom:"10px",width:"120px",height:"50px",border:"none",backgroundColor:"black",color:"white",cursor:"pointer"}}>회원가입</button>
        <Link to="/"><button type='button' style={{marginLeft:"10px",marginBottom:"10px",width:"120px",height:"50px",border:"none",backgroundColor:"gray",color:"white",cursor:"pointer"}}>회원가입 취소</button></Link>
      </div>
    </div>
    </form>
    </>
    
  );
};

export default Signup;
