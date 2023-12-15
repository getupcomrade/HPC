package com.example.adb_back.service;

import com.example.adb_back.model.Catalog;
import com.example.adb_back.repository.CatalogRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class CatalogService {

    private final CatalogRepository catalogRepository;

    public CatalogService(CatalogRepository catalogRepository) {
        this.catalogRepository = catalogRepository;
    }

    public List<Catalog> getAll(){
        return catalogRepository.findAll();
    }
    public Catalog getById(String id){
        return catalogRepository.findById(id).get();
    }
    public void create(Catalog catalog){
        catalogRepository.save(catalog);
    }

    public List<Catalog> getByCategory(String category){
        List<Catalog> catalogList = catalogRepository.findAll();
        List<Catalog> catalogByCategory = new ArrayList<>();
        for (Catalog catalog: catalogList){
            if (Objects.equals(category, catalog.getCategory())){
                catalogByCategory.add(catalog);
            }
        }
        return catalogByCategory;
    }

    public Catalog search(String name){
        List<Catalog> catalogList = catalogRepository.findAll();
        Catalog catalog1 = new Catalog();
        for (Catalog catalog: catalogList){
            if (Objects.equals(catalog.getName(), name)){
                catalog1.setId(catalog.getId());
                catalog1.setPrice(catalog.getPrice());
                catalog1.setDescription(catalog.getDescription());
                catalog1.setCategory(catalog.getCategory());
                catalog1.setName(catalog.getName());
                catalog1.setImage(catalog.getImage());

            }
        }
        return catalog1;
    }
    public void delete (String id){
        Catalog catalog = catalogRepository.findById(id).get();
        catalogRepository.delete(catalog);
    }
    public void update(String id, Catalog catalog){
        Catalog catalog1 = catalogRepository.findById(id).get();
        catalog1.setCategory(catalog.getCategory());
        catalog1.setName(catalog.getName());
        catalog1.setDescription(catalog.getDescription());
        catalog1.setPrice(catalog.getPrice());
    }
}
