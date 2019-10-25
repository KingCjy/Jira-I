package me.kingcjy.jira.app.api.test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
public class TestController {

    @GetMapping("/test")
    public TestDto test() {
        TestDto dto = new TestDto();
        dto.setStartDateTime(LocalDateTime.now());
        return dto;
    }

    @PostMapping("/test2")
    public String test(@RequestBody TestDto dto) {

        return String.valueOf(dto.getStartDateTime().getDayOfYear());
    }
}
