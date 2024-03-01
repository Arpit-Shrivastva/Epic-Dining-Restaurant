package com.example.UserAuthService.Service;

import com.example.UserAuthService.Exceptions.InvalidCredentialException;
import com.example.UserAuthService.Exceptions.UserAlreadyFoundException;
import com.example.UserAuthService.Exceptions.UserNotFoundException;
import com.example.UserAuthService.Model.User;

import java.util.List;

public interface UserService {

    User saveUser(User userDetails) throws UserAlreadyFoundException;
    User getUserByEmailAndPassword(String userEmail, String userPassword) throws InvalidCredentialException;
    List<User> getAllUsers();
    User forgotPassword(String userEmail, User user) throws InvalidCredentialException;
    boolean deleteUser(String userEmail) throws UserNotFoundException;
    List<String> getUserEmail();

}
