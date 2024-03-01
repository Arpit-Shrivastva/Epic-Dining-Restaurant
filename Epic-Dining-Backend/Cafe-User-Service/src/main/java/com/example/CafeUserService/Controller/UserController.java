package com.example.CafeUserService.Controller;

import com.example.CafeService.Exceptions.UserAlreadyExistsException;
import com.example.CafeService.Exceptions.UserNotFoundException;
import com.example.CafeUserService.Model.User;
import com.example.CafeUserService.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signUp")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User savedUser = userService.saveUser(user);
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        } catch (UserAlreadyExistsException e) {
            return new ResponseEntity<>("User with this email already exists", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUser();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PutMapping("cafe/updateUser/{userEmail}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable String userEmail) {
        try {
            User updatedUser = userService.updateUser(user, userEmail);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updatePassword/{userEmail}")
    public ResponseEntity<?> updatePassword(@RequestBody User user, @PathVariable String userEmail) {
        try {
            User updatedUser = userService.updatePassword(user, userEmail);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("cafe/deleteUser/{userEmail}")
    public ResponseEntity<?> deleteUser(@PathVariable String userEmail) {
        try {
            boolean deleted = userService.deleteUser(userEmail);
            if (deleted) {
                return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }
}
