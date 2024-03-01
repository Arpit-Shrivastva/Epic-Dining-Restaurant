package com.example.CafeUserService.Model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

@Data
public class Order {

    @Id
    private String productName;
    private String totalQuantity;
    private String totalPrice;

    private List<Address> addressList = new ArrayList<>();

}
