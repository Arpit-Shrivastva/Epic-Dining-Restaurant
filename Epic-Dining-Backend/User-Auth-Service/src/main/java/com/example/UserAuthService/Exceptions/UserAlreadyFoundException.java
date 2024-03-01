package com.example.UserAuthService.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "User Already Present")

public class UserAlreadyFoundException extends Exception{
}
