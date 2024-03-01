package com.example.UserAuthService.Security;

import com.example.UserAuthService.Model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JWTSecurityTokenGeneratorImpl implements SecurityTokenGenerator {
    @Override
    public String generateToken(User user) {
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("USER", user.getUserEmail());
        return generateTokenVal(objectMap, user.getUserEmail());
    }

    public String generateTokenVal(Map<String, Object> claims, String userEmail) {
        String jwtToken = Jwts.builder()
                .setIssuer("user")
                .setClaims(claims)
                .setSubject(userEmail)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30))
                .signWith(SignatureAlgorithm.HS256, "MYSCRET")
                .compact();
        return jwtToken;
    }
}
