package com.tech.cadt.start;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;


@SpringBootApplication
@Component
@ComponentScan("com.tech.cadt.catalogue")

public class CatalogueService {
	public static void main(String[] args) {
		SpringApplication.run(CatalogueService.class, args);
		 final Logger LOGGER = LoggerFactory.getLogger(CatalogueService.class);
		   String customlogger ="ADMS Loger::::";
		   LOGGER.info(customlogger+"CustomerService Started");
	}
}