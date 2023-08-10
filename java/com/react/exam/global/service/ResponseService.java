package com.react.exam.global.service;

import com.react.exam.global.config.Message;
import com.react.exam.global.enums.StatusEnum;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;

@Service
public class ResponseService {

    Message message = new Message();
    HttpHeaders headers= new HttpHeaders();
    HttpStatus status;

    public ResponseEntity<?> returnResponse(StatusEnum statusEnum, IllegalStateException e){
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        status = HttpStatus.valueOf(statusEnum.httpMessage);

        message.setStatusCode(statusEnum.statusCode);
        message.setHttpMessage(statusEnum.httpMessage);
        message.setMessage(e.getMessage());

        return new ResponseEntity<>(message, headers, status);
    }

    public ResponseEntity<?> returnResponse(StatusEnum statusEnum, String responseMessage){
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        status = HttpStatus.valueOf(statusEnum.httpMessage);

        message.setStatusCode(statusEnum.statusCode);
        message.setHttpMessage(statusEnum.httpMessage);
        message.setMessage(responseMessage);

        return new ResponseEntity<>(message, headers, status);
    }

}
