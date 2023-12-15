package com.example.adb_back.controller;

import com.example.adb_back.model.Catalog;
import com.example.adb_back.service.CatalogService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/catalog")
public class CatalogController {
    private final CatalogService catalogService;

    public CatalogController(CatalogService catalogService) {
        this.catalogService = catalogService;
    }

    @GetMapping("/get-all")
    public List<Catalog> getAll(){
        return catalogService.getAll();
    }
    @GetMapping("/get-by-id")
    public Catalog getById(@RequestParam String id){
        return catalogService.getById(id);
    }
    @GetMapping("/search")
    public Catalog search(@RequestParam String name){
        return  catalogService.search(name);
    }
    @GetMapping("/get-by-category")
    public List<Catalog> getByCategory (@RequestParam String category){
        return catalogService.getByCategory(category);
    }
    @PostMapping("/create")
    public void createCatalog(@RequestBody Catalog catalog){
        catalogService.create(catalog);
    }
    @DeleteMapping("/delete")
    public void delete (@RequestParam String id){
        catalogService.delete(id);
    }
    @PutMapping("/update")
    public void updateCatalog(@RequestParam String id, @RequestBody Catalog catalog){
        catalogService.update(id,catalog);
    }
}
