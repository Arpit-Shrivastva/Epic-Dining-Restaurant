package com.example.CafeUserService;

import com.example.CafeUserService.Filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableFeignClients
public class CafeUserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CafeUserServiceApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean jwtFilterBean(){
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new JwtFilter());
		filterRegistrationBean.addUrlPatterns("/user/cafe/*");
		return filterRegistrationBean;
	}

}
