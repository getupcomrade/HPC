package com.example.adb_back.service;

import com.example.adb_back.model.CartProducts;
import com.example.adb_back.model.Catalog;
import com.example.adb_back.model.Recommendations;
import com.example.adb_back.repository.CartRepository;
import com.example.adb_back.repository.CatalogRepository;
import com.example.adb_back.repository.RecommendationsRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
public class RecommendationsService {
    private final CartRepository cartRepository;
    private final CatalogRepository catalogRepository;
    private final RecommendationsRepository recommendationsRepository;

    public RecommendationsService(CartRepository cartRepository, CatalogRepository catalogRepository, RecommendationsRepository recommendationsRepository) {
        this.cartRepository = cartRepository;
        this.catalogRepository = catalogRepository;
        this.recommendationsRepository = recommendationsRepository;
    }

    public List<Recommendations> getAll(){
        List<Recommendations> recommendations = recommendationsRepository.findAll();
        return recommendations;
    }

    public List<Recommendations> getByUser(String userId){
        List<Recommendations> recommendationsList = recommendationsRepository.findAll();
        List<Recommendations> recommendationsListByUser = new ArrayList<>();
        for (Recommendations recommendations : recommendationsList){
            if (Objects.equals(recommendations.getUserId(), userId)){
                recommendationsListByUser.add(recommendations);
            }
        }
        return recommendationsListByUser;
    }
    public void createRecommendations(String category, String userid){
        List<Catalog> catalogList = catalogRepository.findAll();

        Recommendations recommendations1 = new Recommendations();


        for (Catalog catalog : catalogList) {
            if (Objects.equals(catalog.getCategory(), category)) {

                recommendations1.setId(catalog.getId());
                recommendations1.setUserId(userid);
                recommendations1.setName(catalog.getName());
                recommendations1.setCategory(catalog.getCategory());
                recommendations1.setDescription(catalog.getDescription());
                recommendations1.setPrice(catalog.getPrice());
                recommendations1.setImage(catalog.getImage());
                recommendationsRepository.save(recommendations1);

            }
        }

    }
    public Recommendations getById(String id){
        Recommendations recommendations = recommendationsRepository.findById(id).get();
        return recommendations;
    }

    public void deleteFromRecommendation(String id){
        Recommendations recommendations = recommendationsRepository.findById(id).get();
        recommendationsRepository.delete(recommendations);
    }


}
