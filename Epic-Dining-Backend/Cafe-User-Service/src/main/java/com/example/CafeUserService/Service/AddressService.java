package com.example.CafeUserService.Service;

import com.example.CafeUserService.Model.Address;

import java.util.List;

public interface AddressService {
    Address saveAddress(Address address);

    List<Address> getAllAddresses();

    Address getAddressById(String addressId);

    void deleteAddress(String addressId);
}
