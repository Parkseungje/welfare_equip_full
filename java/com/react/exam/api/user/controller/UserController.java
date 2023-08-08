package com.react.exam.api.user.controller;

import com.react.exam.api.user.dto.UserRequest;
import com.react.exam.api.user.entity.User;
import com.react.exam.api.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody UserRequest userRequest, BindingResult bindingResult) {
        System.out.println(userRequest.getUserId());
        System.out.println(userRequest.getPassword());
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body("Validation error");
        }

        try {
            User user = User.createUser(userRequest, passwordEncoder);
            userService.saveUser(user);
            return ResponseEntity.ok("User created successfully");
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}


