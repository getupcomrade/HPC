package com.example.adb_back.repository;

import com.example.adb_back.model.Recommendations;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendationsRepository extends MongoRepository<Recommendations, String> {
}
