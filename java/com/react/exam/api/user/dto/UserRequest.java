package com.react.exam.api.user.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserRequest {

    String userId;
    String uName;
    String email;
    String password;
    String nickname;
    String phoneNumber;
    String userAddress;
    String location;
    int division;
    int passwordQuestion;
    String passwordAnswer;
    String uImgPath;
    int deleted;
    int wAdmin;
    String deldate;
    int regflag;
    String uImgName;
}
