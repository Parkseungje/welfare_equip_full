package com.react.exam.api.user.service;

import com.react.exam.api.user.dto.UserRequest;
import com.react.exam.api.user.entity.User;
import com.react.exam.api.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void saveUser(UserRequest userRequest, PasswordEncoder passwordEncoder){
        User.UserBuilder builder = User.builder();
        builder.userId(userRequest.getUserId());
        builder.password(passwordEncoder.encode(userRequest.getPassword()));

        User user = builder.build();

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

    //회원가입시 한번더 중복검사
    private void validateDuplicateMember(User user){
        try{
            duplicateFunc(user);
        }
        catch (Exception e){
            throw new IllegalStateException(e.getMessage());
        }
    }

    //프론트에서 id중복검사 api
    public void checkDuplicateId(UserRequest userRequest){
        User.UserBuilder builder = User.builder();
        builder.userId(userRequest.getUserId());

        User user = builder.build();

        try{
            duplicateFunc(user);
        }
        catch (Exception e){
            throw new IllegalStateException(e.getMessage());
        }

    }

    private void duplicateFunc(User user){
        User findMember = userRepository.findByUserId(user.getUserId());

        if(user.getUserId() == "") throw new IllegalStateException("값을 입력해주세요.");
        if(findMember != null) throw new IllegalStateException("이미 가입된 회원입니다.");
    }
}
