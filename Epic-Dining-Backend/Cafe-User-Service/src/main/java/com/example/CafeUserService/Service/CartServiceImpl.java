package com.example.CafeUserService.Service;

import com.example.CafeUserService.Model.Cart;
import com.example.CafeUserService.Model.User;
import com.example.CafeUserService.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public Cart saveCart(String userEmail, Cart cart) {
        User user = userRepository.findById(userEmail).orElse(null);
        if (user != null) {
            List<Cart> userCarts = user.getCarts();

            // Initialize the list if it's null
            if (userCarts == null) {
                userCarts = new ArrayList<>();
            }

            userCarts.add(cart);
            user.setCarts(userCarts);
            userRepository.save(user);
            return cart;
        }
        return null;
    }

    @Override
    public List<Cart> getCartsByUserId(String userEmail) {
        User user = userRepository.findById(userEmail).orElse(null);
        return (user != null) ? user.getCarts() : Collections.emptyList();
    }

    @Override
    public boolean deleteCartItem(String userEmail, String cartId) {
        User user = userRepository.findById(userEmail).orElse(null);
        if (user != null) {
            List<Cart> userCarts = user.getCarts();
            Optional<Cart> cartToRemove = userCarts.stream().filter(cart -> cart.getProductName().equals(cart.getProductName())).findFirst();
            if (cartToRemove.isPresent()) {
                userCarts.remove(cartToRemove.get());
                user.setCarts(userCarts);
                userRepository.save(user);
                return true;
            }
        }
        return false;
    }

}
