package com.example.adb_back.repository;

import com.example.adb_back.model.CartProducts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends MongoRepository<CartProducts, String> {
}
