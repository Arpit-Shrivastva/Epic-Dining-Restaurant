package com.example.CafeUserService.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Document
public class User {
    @Id
    private String userEmail;
    private String firstName;
    private String lastName;
    private long mobileNumber;
    private String userPassword;
    private String gender;


    private List<Cart> carts ;

    private List<Order> orders ;
}
