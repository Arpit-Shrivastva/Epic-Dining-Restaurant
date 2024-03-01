package com.example.CafeUserService.Service;

import com.example.CafeUserService.Model.Address;
import com.example.CafeUserService.Repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService{
    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Address saveAddress(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    @Override
    public Address getAddressById(String addressId) {
        return addressRepository.findById(addressId).orElse(null);
    }

    @Override
    public void deleteAddress(String addressId) {
        addressRepository.deleteById(addressId);
    }
}
