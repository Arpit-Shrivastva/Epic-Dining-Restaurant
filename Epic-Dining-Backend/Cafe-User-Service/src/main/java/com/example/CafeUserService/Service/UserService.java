package com.example.CafeUserService.Service;

import com.example.CafeService.Exceptions.UserAlreadyExistsException;
import com.example.CafeService.Exceptions.UserNotFoundException;
import com.example.CafeUserService.Model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user) throws UserAlreadyExistsException;

    List<User> getAllUser();

    User updateUser(User user, String userEmail) throws UserNotFoundException;

    User updatePassword(User user, String userEmail) throws UserNotFoundException;

    boolean deleteUser(String userEmail) throws UserNotFoundException;
}
