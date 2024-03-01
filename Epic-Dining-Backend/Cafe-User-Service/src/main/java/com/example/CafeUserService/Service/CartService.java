package com.example.CafeUserService.Service;

import com.example.CafeUserService.Model.Cart;

import java.util.List;

public interface CartService {
    Cart saveCart(String userEmail, Cart cart);

    List<Cart> getCartsByUserId(String userEmail);

    boolean deleteCartItem(String userEmail, String cartId);
}
