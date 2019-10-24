package me.kingcjy.jira.web.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.kingcjy.jira.web.filter.HttpLoggingFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebConfig {

    @Bean
    public FilterRegistrationBean myFilter() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(new HttpLoggingFilter());
        registration.addUrlPatterns("*");
        return registration;
    }
}
