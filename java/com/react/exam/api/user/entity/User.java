package com.react.exam.api.user.entity;

import com.react.exam.global.entity.BaseEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
//@Table(name = "user")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq_gen")
    Long user_no;

    String u_name;
    String email;
    String password;
    String nickname;
    String phone_number;
    String user_address;
    String created_at;
    String updated_at;
    String location;
    int division;
    int password_question;
    String password_answer;
    String u_img_path;
    int deleted;
    int w_admin;
    String deldate;
    int regflag;
    String u_img_name;
    String user_id;

}
