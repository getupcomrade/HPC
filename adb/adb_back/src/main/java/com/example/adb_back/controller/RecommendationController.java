package com.example.adb_back.controller;

import com.example.adb_back.model.CartProducts;
import com.example.adb_back.model.Recommendations;
import com.example.adb_back.service.RecommendationsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recommendation")
public class RecommendationController {
    private final RecommendationsService recommendationsService;

    public RecommendationController(RecommendationsService recommendationsService) {
        this.recommendationsService = recommendationsService;
    }

    @GetMapping("/get-by-user")
    public List<Recommendations> getByUser(@RequestParam String userId){
        return recommendationsService.getByUser(userId);
    }

//    @GetMapping("/get-all")
//    public List<Recommendations> getAll(){
//       return recommendationsService.getAll();
//    }
    @GetMapping("/get-by-id")
    public Recommendations getRect(@RequestParam String id){
        return recommendationsService.getById(id);
    }

//    @PostMapping("/create")
//    public void createRec(@RequestParam String userId, @RequestBody String category){
//        recommendationsService.createRecommendations(userId, category);
//    }

//   @DeleteMapping("/delete")
//    public void delete (String id){
//        recommendationsService.deleteFromRecommendation(id);
//   }
}
