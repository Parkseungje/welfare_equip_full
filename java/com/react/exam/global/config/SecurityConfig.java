package com.react.exam.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(WebSecurity web) throws Exception
    {
        web.ignoring().antMatchers("/css/**", "/script/**", "image/**", "/fonts/**", "lib/**");
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
        http.authorizeRequests()
                .antMatchers("/admin/**").hasRole("ADMIN")
                .antMatchers("/**").permitAll();
        http.csrf().disable(); //리액트 - 스프링 연동시 cors 해제
    }

    @Bean //블로그 <기억보단 기록을>의 저자인 동욱님께서는 개발자가 컨트롤이 불가능한 외부 라이브러리를 빈으로 등록하고 싶을때 @Bean을 사용하며, 개발자가 직접 컨트롤이 가능한 클래스의 경우 @Component를 사용한다고 한다.
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
