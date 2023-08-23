package com.react.exam.api.user.controller;

import com.react.exam.api.user.dto.UserRequest;
import com.react.exam.api.user.service.UserService;
import com.react.exam.global.enums.StatusEnum;
import com.react.exam.global.service.ResponseService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {

    private final UserService userService; // 유저 서비스
    private final PasswordEncoder passwordEncoder; // 패스워드 인코더
    private final ResponseService responseService; // restapi 통신담당 서비스

    public UserController(UserService userService, PasswordEncoder passwordEncoder, ResponseService responseService) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.responseService = responseService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody UserRequest userRequest) {
        try {
            userService.saveUser(userRequest, passwordEncoder);

            return responseService.returnResponse(StatusEnum.OK, "회원가입에 성공했습니다!");

        } catch (Exception e) {
            return responseService.returnResponse(StatusEnum.BAD_REQUEST, e.getMessage());
        }
    }

    @PostMapping("/check_duplicate")
    public ResponseEntity<?> checkDuplicate(@RequestBody UserRequest userRequest) {
        try {
            userService.checkDuplicateId(userRequest);

            return responseService.returnResponse(StatusEnum.OK, "사용가능한 아이디입니다!");

        } catch (Exception e) {
            return responseService.returnResponse(StatusEnum.BAD_REQUEST, e.getMessage());
        }
    }

}


