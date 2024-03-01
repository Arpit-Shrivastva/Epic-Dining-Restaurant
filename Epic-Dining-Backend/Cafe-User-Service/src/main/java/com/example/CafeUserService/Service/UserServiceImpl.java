package com.example.CafeUserService.Service;

import com.example.CafeService.Exceptions.UserAlreadyExistsException;
import com.example.CafeService.Exceptions.UserNotFoundException;
import com.example.CafeUserService.Model.User;
import com.example.CafeUserService.Proxy.UserProxy;
import com.example.CafeUserService.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserProxy userProxy;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserProxy userProxy) {
        this.userRepository = userRepository;
        this.userProxy = userProxy;
    }


    @Override
    public User saveUser(User user) throws UserAlreadyExistsException {
        if (userRepository.findById(user.getUserEmail()).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        userProxy.saveUser(user);
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user, String userEmail) throws UserNotFoundException {
        // Check if the user exists in the local repository
        Optional<User> optionalUser = userRepository.findById(userEmail);

        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }

        // Update the existing user's details
        User existingUser = optionalUser.get();
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());

        // Save the updated user to the local repository
        User updatedUser = userRepository.save(existingUser);
        return updatedUser;
    }

    @Override
    public User updatePassword(User user, String userEmail) throws UserNotFoundException {
        Optional<User> optionalUser = userRepository.findById(userEmail);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User existingUser = optionalUser.get();
        existingUser.setUserPassword(user.getUserPassword());
        userProxy.forgotPassword(user, userEmail);
        return userRepository.save(existingUser);
    }


    @Override
    public boolean deleteUser(String userEmail) throws UserNotFoundException {
        boolean flag = false;
        if (userRepository.findById(userEmail).isEmpty()) {
            throw new UserNotFoundException();
        }
        userProxy.deleteUser(userEmail);
        userRepository.deleteById(userEmail);
        flag = true;
        return flag;
    }
}
