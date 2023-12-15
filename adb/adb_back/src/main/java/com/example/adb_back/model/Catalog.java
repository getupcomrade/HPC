package com.example.adb_back.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Catalog")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Catalog {
    @Id
    private String id;

    private String name;
    private String category;
    private String description;
    private String image;
    private Integer price;


}
