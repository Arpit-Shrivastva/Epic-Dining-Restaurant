package com.example.UserAuthService.Controller;

import com.example.UserAuthService.Exceptions.InvalidCredentialException;
import com.example.UserAuthService.Exceptions.UserAlreadyFoundException;
import com.example.UserAuthService.Exceptions.UserNotFoundException;
import com.example.UserAuthService.Model.User;
import com.example.UserAuthService.Security.SecurityTokenGenerator;
import com.example.UserAuthService.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("auth")
public class UserController {

    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;
    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }

    //    http://localhost:8081/auth/save
    @PostMapping("save")
    public ResponseEntity<?> saveUser(@RequestBody User user) throws UserAlreadyFoundException {
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    //    http://localhost:8081/auth/login
    @PostMapping("login")
    public ResponseEntity<?> loginUser(@RequestBody User user) throws InvalidCredentialException {
        if (userService.getUserByEmailAndPassword(user.getUserEmail(), user.getUserPassword())==null){
            throw new InvalidCredentialException();
        }
        String token = securityTokenGenerator.generateToken(user);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    //    http://localhost:8081/auth/allUsers
    @GetMapping("allUsers")
    public ResponseEntity<?> getUsers(){
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    //    http://localhost:8081/auth/forgotPassword
    @PutMapping("forgotPassword/{userEmail}")
    public ResponseEntity<?> forgotPassword(@RequestBody User user, @PathVariable String userEmail) throws InvalidCredentialException {
        return new ResponseEntity<>(userService.forgotPassword(userEmail, user), HttpStatus.ACCEPTED);
    }

    //    http://localhost:8081/auth/delete/email
    @DeleteMapping("delete/{userEmail}")
    public ResponseEntity<?> deleteUser(@PathVariable String userEmail) throws UserNotFoundException {
        return new ResponseEntity<>(userService.deleteUser(userEmail), HttpStatus.OK);
    }

    //    http://localhost:8081/auth/emails
    @GetMapping("/emails")
    public ResponseEntity<List<String>> getUserEmails() {
        List<String> userEmails = userService.getUserEmail();
        return new ResponseEntity<>(userEmails, HttpStatus.OK);
    }

}
