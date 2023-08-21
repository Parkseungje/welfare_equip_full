package com.react.exam.api.user.service;

import com.react.exam.api.user.entity.User;
import com.react.exam.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Transactional
@Service
public class UserService {

    private final UserRepository userRepository;

    public void saveUser(User user) {
        validateDuplicateMember(user);
        userRepository.save(user);
    }

    public User findByUserId(String user_id) {
        User userObj = userRepository.findByUserId(user_id);
        if (userObj != null) {
            throw new IllegalStateException("이미 가입된 회원입니다.");
        }
        return userObj;
    }

    private void validateDuplicateMember(User user) {
        User findMember = userRepository.findByUserId(user.getUserId());
        if (findMember != null) {
            throw new IllegalStateException("이미 가입된 회원입니다.");
        }
    }

}
