package com.techm.auth.jwt;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class JwtUtil {
    public static String generateToken(String signingKey, String username, String password) {
    
    final Logger LOGGER = LoggerFactory.getLogger(JwtUtil.class);
	String customlogger ="ADMS Loger::::";
	LOGGER.info(customlogger+"JwtUtil Started.");
	
       long nowMillis = System.currentTimeMillis();
      // long ttl= 60000;
    	// long exp = nowMillis + ttl ;
    	
		JwtBuilder builder = Jwts.builder()
    		   .setIssuedAt(new Date(nowMillis))
    		   .setSubject(String.valueOf(username))  
       		   .setIssuer(signingKey)
       		   //.setExpiration(new Date(exp))
       	       .claim("password", password)
       		   .signWith(SignatureAlgorithm.HS256, signingKey);
	
    	
    	 	   return builder.compact();

    }
}
