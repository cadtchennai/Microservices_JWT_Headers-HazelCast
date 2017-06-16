package com.tech.cadt.start;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@SpringBootApplication
@Component
@ComponentScan("com.tech.cadt.order")
public class OrderService {
	public static void main(String[] args) {
		SpringApplication.run(OrderService.class, args);
	}
}