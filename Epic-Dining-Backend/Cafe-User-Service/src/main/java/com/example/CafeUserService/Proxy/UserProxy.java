package com.example.CafeUserService.Proxy;

import com.example.CafeUserService.Model.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "user-auth-service", url = "http://localhost:8081")
public interface UserProxy {

    @PostMapping("auth/save")
    ResponseEntity<?> saveUser(@RequestBody User user);

    @PutMapping("auth/forgotPassword/{userEmail}")
    ResponseEntity<?> forgotPassword(@RequestBody User user, @PathVariable String userEmail);

    @DeleteMapping("auth/delete/{userEmail}")
    ResponseEntity<?> deleteUser(@PathVariable("userEmail") String userEmail);
}
