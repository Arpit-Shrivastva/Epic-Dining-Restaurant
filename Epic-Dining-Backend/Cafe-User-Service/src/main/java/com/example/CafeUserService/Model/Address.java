package com.example.CafeUserService.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Address {
    @Id
    private String addressId;

    private String userName;
    private long mobileNumber;
    private int userPincode;
    private String address;
    private String cityName;
    private String stateName;
    private String country;
}
