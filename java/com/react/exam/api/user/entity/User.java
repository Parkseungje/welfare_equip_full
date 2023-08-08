package com.react.exam.api.user.entity;

import com.react.exam.api.user.dto.UserRequest;
import com.react.exam.global.entity.BaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
//@Table(name = "user")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long userNo;

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

    @Builder
    public User(String userId, String password) {
        this.userId = userId;
        this.password = password;
    }

    public static User createUser(UserRequest userRequest, PasswordEncoder passwordEncoder) {
        User user = User.builder()
                .userId(userRequest.getUserId())
                .password(passwordEncoder.encode(userRequest.getPassword()))  //암호화처리
                .build();
        return user;
    }


}
