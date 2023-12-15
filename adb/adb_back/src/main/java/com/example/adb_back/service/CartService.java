package com.example.adb_back.service;

import com.example.adb_back.model.CartProducts;
import com.example.adb_back.model.Catalog;
import com.example.adb_back.repository.CartRepository;
import com.example.adb_back.repository.CatalogRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final CatalogRepository catalogRepository;

    private final RecommendationsService recommendationsService;

    public CartService(CartRepository cartRepository, CatalogRepository catalogRepository, RecommendationsService recommendationsService) {
        this.cartRepository = cartRepository;
        this.catalogRepository = catalogRepository;
        this.recommendationsService = recommendationsService;
    }

    public List<CartProducts> getAll(String userId){
        List<CartProducts> cartProductsList = cartRepository.findAll();
        List<CartProducts> cartProductsByUser = new ArrayList<>();
        for(CartProducts cartProducts: cartProductsList){
            if (Objects.equals(cartProducts.getUserId(), userId)){
                cartProductsByUser.add(cartProducts);
            }
        }
        return cartProductsByUser;
    }
    public void moveToCart(String id, String userId){
        Catalog catalog = catalogRepository.findById(id).get();
        CartProducts cartProducts = new CartProducts();
        cartProducts.setId(id);
        cartProducts.setUserId(userId);
        cartProducts.setName(catalog.getName());
        cartProducts.setCategory(catalog.getCategory());
        cartProducts.setDescription(catalog.getDescription());
        cartProducts.setPrice(catalog.getPrice());
        cartProducts.setImage(catalog.getImage());
        cartRepository.save(cartProducts);
        recommendationsService.createRecommendations(cartProducts.getCategory(),userId);
    }
    public CartProducts getById(String id){
        CartProducts cartProducts = cartRepository.findById(id).get();
        return cartProducts;
    }

    public void deleteFromCart(String id){
        CartProducts cartProducts = cartRepository.findById(id).get();
        cartRepository.delete(cartProducts);
    }

    public List<CartProducts> getByUser(String userId){
        List<CartProducts> cartProductsList = cartRepository.findAll();
        List<CartProducts> cartProductsUser = new ArrayList<>();
        for (CartProducts cartProducts : cartProductsList){
            if (cartProducts.getUserId() == userId){
                cartProductsUser.add(cartProducts);
            }
        }
        return cartProductsUser;
    }

    public Integer getAllPrice(){
        int totalPrice = 0;
        List<CartProducts> cartProductsList = cartRepository.findAll();
        for(CartProducts cartProducts: cartProductsList){
            totalPrice = totalPrice + cartProducts.getPrice();
        }
        return totalPrice;
    }
}
