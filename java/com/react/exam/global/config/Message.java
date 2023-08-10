package com.react.exam.global.config;

import com.react.exam.global.enums.StatusEnum;
import lombok.Data;

@Data
public class Message {
    private int statusCode;
    private String httpMessage;
    private String message;


    public Message() {
        this.statusCode = StatusEnum.BAD_REQUEST.statusCode;
        this.httpMessage = StatusEnum.BAD_REQUEST.httpMessage;;
        this.message = null;
    }
}
