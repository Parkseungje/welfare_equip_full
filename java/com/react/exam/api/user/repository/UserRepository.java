package com.react.exam.api.user.repository;

import com.react.exam.api.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserId(String user_id); //회원가입 아이디로 검색
    User deleteByUserId(String user_id); // 아이디로 삭제
}
