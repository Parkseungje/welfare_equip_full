package com.react.exam.api.user.controller;

import com.react.exam.api.user.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
//    private final UserService userService;
//
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }

    @PostMapping("/user/signup")
    public void signup(@RequestBody User user) {
        System.out.println(user.getUser_id());
        System.out.println('넵');
//        try {
//            userService.signup(user);
//            return ResponseEntity.ok("회원가입이 성공적으로 완료되었습니다.");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원가입 중 오류가 발생하였습니다.");
//        }
    }
}
