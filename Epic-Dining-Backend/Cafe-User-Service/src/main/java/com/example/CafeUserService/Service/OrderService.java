package com.example.CafeUserService.Service;

import com.example.CafeUserService.Model.Address;
import com.example.CafeUserService.Model.Order;

import java.util.List;

public interface OrderService {

    Order saveOrder(String userEmail, Order order);

    List<Order> getOrdersByUserId(String userEmail);

    List<Order> getAllOrders();

    boolean deleteOrder(String userEmail, String orderId);

    Address saveAddressForOrder(String userEmail, String orderId, Address address);
}
