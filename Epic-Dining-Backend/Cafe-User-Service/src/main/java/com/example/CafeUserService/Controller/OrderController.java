package com.example.CafeUserService.Controller;

import com.example.CafeUserService.Model.Address;
import com.example.CafeUserService.Model.Order;
import com.example.CafeUserService.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("save/{userEmail}")
    public ResponseEntity<Order> saveOrder(@PathVariable String userEmail, @RequestBody Order order) {
        Order savedOrder = orderService.saveOrder(userEmail, order);
        if (savedOrder != null) {
            return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("fetch/{userEmail}")
    public ResponseEntity<List<Order>> getOrdersByUserId(@PathVariable String userEmail) {
        List<Order> orders = orderService.getOrdersByUserId(userEmail);
        if (!orders.isEmpty()) {
            return new ResponseEntity<>(orders, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("delete/{userEmail}/{orderId}")
    public ResponseEntity<Void> deleteOrder(@PathVariable String userEmail, @PathVariable String orderId) {
        if (orderService.deleteOrder(userEmail, orderId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("add/{userEmail}/{orderId}/address")
    public ResponseEntity<Address> saveAddressForOrder(@PathVariable String userEmail, @PathVariable String orderId, @RequestBody Address address) {
        Address savedAddress = orderService.saveAddressForOrder(userEmail, orderId, address);
        if (savedAddress != null) {
            return new ResponseEntity<>(savedAddress, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}