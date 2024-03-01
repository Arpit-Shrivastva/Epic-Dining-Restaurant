package com.example.UserAuthService.Repository;

import com.example.UserAuthService.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByUserEmailAndUserPassword(String userEmail, String userPassword);
}
