package com.example.CafeUserService.Repository;

import com.example.CafeUserService.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findById(String userEmail);
}
