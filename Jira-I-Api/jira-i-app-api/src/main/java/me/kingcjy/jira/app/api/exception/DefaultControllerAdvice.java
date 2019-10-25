package me.kingcjy.jira.app.api.exception;

import me.kingcjy.jira.app.api.response.ApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class DefaultControllerAdvice {

    private final Logger logger = LoggerFactory.getLogger(DefaultControllerAdvice.class);

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    public ResponseEntity<ApiResponse<Void>> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        List<FieldError> errorList = new ArrayList<>();
        errorList.addAll(e.getBindingResult().getFieldErrors());

        if(errorList.size() > 0) {
            FieldError error = errorList.get(0);
            String message = new StringBuilder()
                    .append(error.getField())
                    .append("은(는) ")
                    .append(error.getDefaultMessage())
                    .toString();
            return ApiResponse.getResponse(HttpStatus.BAD_REQUEST, message);
        } else {
            return ApiResponse.getResponse(HttpStatus.BAD_REQUEST);
        }
    }

    @ExceptionHandler(BindException.class)
    @ResponseBody
    public ResponseEntity<ApiResponse<Void>> handleBindException(BindException e) {
        List<FieldError> errorList = new ArrayList<>();
        errorList.addAll(e.getBindingResult().getFieldErrors());

        if(errorList.size() > 0) {
            FieldError error = errorList.get(0);
            String message = new StringBuilder()
                    .append(error.getField())
                    .append("은(는) ")
                    .append(error.getDefaultMessage())
                    .toString();
            return ApiResponse.getResponse(HttpStatus.BAD_REQUEST, message);
        } else {
            return ApiResponse.getResponse(HttpStatus.BAD_REQUEST);
        }
    }
}
