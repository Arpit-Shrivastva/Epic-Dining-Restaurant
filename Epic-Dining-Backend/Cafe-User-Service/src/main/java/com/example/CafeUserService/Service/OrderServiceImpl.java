package com.example.CafeUserService.Service;

import com.example.CafeUserService.Model.Address;
import com.example.CafeUserService.Model.Order;
import com.example.CafeUserService.Model.User;
import com.example.CafeUserService.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AddressService addressService;

    @Override
    public Order saveOrder(String userEmail, Order order) {
        User user = userRepository.findById(userEmail).orElse(null);
        if (user != null) {
            if (user.getOrders() == null) {
                user.setOrders(new ArrayList<>());
            }

            List<Order> userOrders = user.getOrders();
            userOrders.add(order);
            user.setOrders(userOrders);
            userRepository.save(user);
            return order;
        }
        return null;
    }

    @Override
    public List<Order> getOrdersByUserId(String userEmail) {
        User user = userRepository.findById(userEmail).orElse(null);
        return (user != null) ? user.getOrders() : Collections.emptyList();
    }

    @Override
    public List<Order> getAllOrders() {
        List<Order> allOrders = new ArrayList<>();
        userRepository.findAll().forEach(user -> {
            List<Order> userOrders = user.getOrders();
            if (userOrders != null) {
                allOrders.addAll(userOrders);
            }
        });
        return allOrders;
    }


    @Override
    public boolean deleteOrder(String userEmail, String orderId) {
        User user = userRepository.findById(userEmail).orElse(null);
        if (user != null) {
            List<Order> userOrders = user.getOrders();
            Optional<Order> orderToRemove = userOrders.stream().filter(order -> order.getProductName().equals(order.getProductName())).findFirst();
            if (orderToRemove.isPresent()) {
                userOrders.remove(orderToRemove.get());
                user.setOrders(userOrders);
                userRepository.save(user);
                return true;
            }
        }
        return false;
    }

    @Override
    public Address saveAddressForOrder(String userEmail, String orderId, Address address) {
        User user = userRepository.findById(userEmail).orElse(null);
        if (user != null) {
            List<Order> userOrders = user.getOrders();

            if (userOrders == null) {
                userOrders = new ArrayList<>();
            }

            Optional<Order> orderToUpdate = userOrders.stream().filter(order -> order.getProductName().equals(order.getProductName())).findFirst();
            if (orderToUpdate.isPresent()) {
                orderToUpdate.get().getAddressList().add(addressService.saveAddress(address));
                userRepository.save(user);
                return address;
            }
        }
        return null;
    }
}
