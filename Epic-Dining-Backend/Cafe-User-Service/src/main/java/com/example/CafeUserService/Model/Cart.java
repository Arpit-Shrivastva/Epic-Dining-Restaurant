package com.example.CafeUserService.Model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

@Data
public class Cart {

    @Id
    private String productName;
    private String productPhoto;
    private String productQuantity;
    private String productDescription;
    private String productPrice;

}
