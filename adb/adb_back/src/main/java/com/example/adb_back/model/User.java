package com.example.adb_back.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

    @Document(collection = "User")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
public class User {
    @Id
    private String id;
    private String username;
    private String email;
    private String name;
    private String surname;
    private String password;
}
