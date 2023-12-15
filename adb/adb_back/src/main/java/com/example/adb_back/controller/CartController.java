package com.example.adb_back.controller;

import com.example.adb_back.model.CartProducts;
import com.example.adb_back.service.CartService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart-products")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/get-by-id")
    public CartProducts getCartById(@RequestParam String id){
        return  cartService.getById(id);
    }
    @GetMapping("get-all")
    public List<CartProducts> getAll(@RequestParam String userId){
        return cartService.getAll(userId);
    }

    @GetMapping("/get-total-price")
    public Integer getPrice(){
       return cartService.getAllPrice();
    }

    @PostMapping("/create-cart")
    public void createCart(@RequestParam String id, String userId){
        cartService.moveToCart(id, userId);

    }

    @GetMapping("get-by-user")
    public List<CartProducts> getByUser(@RequestParam String userId){
        return cartService.getByUser(userId);
    }

    @DeleteMapping("/delete-cart")
    public void deleteCart(@RequestParam String id){
        cartService.deleteFromCart(id);
    }
}
