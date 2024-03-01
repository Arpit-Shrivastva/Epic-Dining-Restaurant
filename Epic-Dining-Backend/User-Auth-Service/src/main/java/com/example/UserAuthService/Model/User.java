package com.example.UserAuthService.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    private String userEmail;
    private String userPassword;
}
