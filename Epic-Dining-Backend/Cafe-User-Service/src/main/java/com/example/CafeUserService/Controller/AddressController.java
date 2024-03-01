package com.example.CafeUserService.Controller;

import com.example.CafeUserService.Model.Address;
import com.example.CafeUserService.Service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("address")
public class AddressController {
    @Autowired
    private AddressService addressService;

    @PostMapping("/save")
    public ResponseEntity<Address> saveAddress(@RequestBody Address address) {
        Address savedAddress = addressService.saveAddress(address);
        return new ResponseEntity<>(savedAddress, HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Address>> getAllAddresses() {
        List<Address> addresses = addressService.getAllAddresses();
        return new ResponseEntity<>(addresses, HttpStatus.OK);
    }

    @GetMapping("/get/{addressId}")
    public ResponseEntity<Address> getAddressById(@PathVariable String addressId) {
        Address address = addressService.getAddressById(addressId);
        if (address != null) {
            return new ResponseEntity<>(address, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{addressId}")
    public ResponseEntity<Void> deleteAddress(@PathVariable String addressId) {
        addressService.deleteAddress(addressId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
