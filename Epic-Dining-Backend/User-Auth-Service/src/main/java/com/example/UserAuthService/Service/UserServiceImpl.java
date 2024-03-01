package com.example.UserAuthService.Service;

import com.example.UserAuthService.Exceptions.InvalidCredentialException;
import com.example.UserAuthService.Exceptions.UserAlreadyFoundException;
import com.example.UserAuthService.Exceptions.UserNotFoundException;
import com.example.UserAuthService.Model.User;
import com.example.UserAuthService.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User userDetails) throws UserAlreadyFoundException {
        if (userRepository.findById(userDetails.getUserEmail()).isPresent()) {
            throw new UserAlreadyFoundException();
        }
        return userRepository.save(userDetails);
    }

    @Override
    public User getUserByEmailAndPassword(String userEmail, String userPassword) throws InvalidCredentialException {
        if (userRepository.findById(userEmail).isEmpty()) {
            throw new InvalidCredentialException();
        }
        return userRepository.findByUserEmailAndUserPassword(userEmail, userPassword);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User forgotPassword(String userEmail, User user) throws InvalidCredentialException {
        if (userRepository.findById(userEmail).isEmpty()) {
            throw new InvalidCredentialException();
        }
        User user1 = userRepository.findById(userEmail).get();
        if (user1.getUserEmail().equals(userEmail)) {
            user1.setUserPassword(user.getUserPassword());
        }
        return userRepository.save(user1);
    }

    @Override
    public boolean deleteUser(String userEmail) throws UserNotFoundException {
        boolean flag = false;
        if (userRepository.findById(userEmail).isEmpty()) {
            throw new UserNotFoundException();
        } else {
            userRepository.deleteById(userEmail);
            flag = true;
        }
        return flag;
    }

    @Override
    public List<String> getUserEmail() {
        List<User> users = userRepository.findAll();
        List<String> list = new ArrayList<>();
        for (User user : users) {
            list.add(user.getUserEmail());
        }
        return list;
    }


}
