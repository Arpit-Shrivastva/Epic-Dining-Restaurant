package com.example.UserAuthService.Security;
import com.example.UserAuthService.Model.User;

public interface SecurityTokenGenerator {
    String generateToken(User user);
}
