package me.kingcjy.jira.app.api.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.sql.Timestamp;
import java.util.Date;

public class ApiResponse<T> {

    public static final String SUCCESS = "success";

    private Meta meta;
    private T body;

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private class Meta {
        private String path;
        private Integer status;
        private String message;
        private String trace;
        private String timestamp;
    }
    @JsonIgnore
    public ApiResponse(HttpStatus httpStatus, String message, T body) {
        this.meta = new Meta();
        this.meta.setStatus(httpStatus.value());
        this.meta.setMessage(message);
        this.meta.setTimestamp(new Timestamp(new Date().getTime()).toString());
        this.meta.setPath(((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest().getRequestURI());

        this.body = body;
    }
    @JsonIgnore
    public ApiResponse(Exception exception, HttpStatus httpStatus) {
        this.meta = new Meta();
        this.meta.setStatus(httpStatus.value());
        this.meta.setMessage(exception.getMessage());
        this.meta.setTrace(this.getStackTrace(exception));
        this.meta.setTimestamp(new Timestamp(new Date().getTime()).toString());
        this.meta.setPath(((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest().getRequestURI());
    }


    @JsonIgnore
    public static <T> ResponseEntity<ApiResponse<T>> successResponse() {
        return getResponse(HttpStatus.OK);
    }
    @JsonIgnore
    public static <T> ResponseEntity<ApiResponse<T>> successResponse(T body) {
        return getResponse(HttpStatus.OK, SUCCESS, body);
    }
    @JsonIgnore
    public static <T> ResponseEntity<ApiResponse<T>> getResponse(HttpStatus httpStatus) {
        return getResponse(httpStatus, SUCCESS, null);
    }
    @JsonIgnore
    public static <T> ResponseEntity<ApiResponse<T>> getResponse(HttpStatus httpStatus, String message) {
        return getResponse(httpStatus, message, null);
    }
    @JsonIgnore
    public static <T> ResponseEntity<ApiResponse<T>> getResponse(HttpStatus httpStatus, T body) {
        return getResponse(httpStatus, SUCCESS, body);
    }
    @JsonIgnore
    public static <T> ResponseEntity<ApiResponse<T>> getResponse(HttpStatus httpStatus, String message, T body) {
        return new ResponseEntity<>(new ApiResponse<>(httpStatus, message, body), httpStatus);
    }
    @JsonIgnore
    public static ResponseEntity<ApiResponse<Void>> getResponse(Exception exeption) {
        return getResponse(exeption, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @JsonIgnore
    public static ResponseEntity<ApiResponse<Void>> getResponse(Exception exception, HttpStatus httpStatus) {
        return new ResponseEntity<>(new ApiResponse<>(exception, httpStatus), httpStatus);
    }

    @JsonIgnore
    private String getStackTrace(Throwable throwable) {
        StringBuilder trace = new StringBuilder().append(throwable);

        for(StackTraceElement stackTraceElement : throwable.getStackTrace()) {
            trace.append("\tat ").append(stackTraceElement);
        }
        return trace.toString();
    }
}
