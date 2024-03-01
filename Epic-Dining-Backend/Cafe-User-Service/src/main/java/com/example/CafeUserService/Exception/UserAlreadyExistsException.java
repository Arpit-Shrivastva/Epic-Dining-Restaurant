package com.example.CafeService.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONTINUE, reason = "User Already Register")
public class UserAlreadyExistsException extends Exception{
}
