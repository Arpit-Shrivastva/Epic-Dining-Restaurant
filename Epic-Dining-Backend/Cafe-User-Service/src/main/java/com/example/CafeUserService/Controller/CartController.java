package com.example.CafeUserService.Controller;

import com.example.CafeUserService.Model.Cart;
import com.example.CafeUserService.Model.User;
import com.example.CafeUserService.Repository.UserRepository;
import com.example.CafeUserService.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("cart")
public class CartController {

    private final CartService cartService;
    private final UserRepository userRepository;

    @Autowired
    public CartController(CartService cartService, UserRepository userRepository) {
        this.cartService = cartService;
        this.userRepository = userRepository;
    }

    @PostMapping("save/{userEmail}")
    public ResponseEntity<?> saveCart(@PathVariable("userEmail") String userEmail, @RequestBody Cart cart) {
        System.out.println("Received userEmail: " + userEmail);

        Optional<User> userOptional = userRepository.findById(userEmail);
        System.out.println("User found: " + userOptional.orElse(null));

        Cart savedCart = cartService.saveCart(userEmail, cart);
        if (savedCart != null) {
            return new ResponseEntity<>(savedCart, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("get/{userEmail}")
    public ResponseEntity<List<Cart>> getCartsByUserId(@PathVariable String userEmail) {
        List<Cart> userCarts = cartService.getCartsByUserId(userEmail);
        return new ResponseEntity<>(userCarts, HttpStatus.OK);
    }

    @DeleteMapping("delete/{userEmail}/{cartId}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable String userEmail, @PathVariable String cartId) {
        if (cartService.deleteCartItem(userEmail, cartId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
