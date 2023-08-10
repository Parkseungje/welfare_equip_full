package com.react.exam.global.enums;

public enum StatusEnum {
    OK(200, "OK"),
    BAD_REQUEST(400, "BAD_REQUEST"),
    NOT_FOUND(404, "NOT_FOUND"),
    INTERNAL_SERER_ERROR(500, "INTERNAL_SERVER_ERROR");

    public int statusCode;
    public String httpMessage;

    StatusEnum(int statusCode, String httpMessage) {
        this.statusCode = statusCode;
        this.httpMessage = httpMessage;
    }
}
