package com.example.adb_back.controller;

import com.example.adb_back.dto.UserDto;
import com.example.adb_back.model.User;
import com.example.adb_back.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/get-user")
    public UserDto getUserById(@RequestParam String id){
        return userService.getById(id);
    }

    @PostMapping("/create")
    public void create (@RequestBody User user){
        userService.create(user);
    }
    @DeleteMapping("/delete")
    public void delete(@RequestParam String id){
        userService.delete(id);
    }
    @PutMapping("/update")
    public void update (@RequestParam String id, @RequestBody User user){
       userService.update(id,user);
    }
    @GetMapping("/get-by-email")
    public User getByEmail (@RequestParam String email){
        return userService.getByEmail(email);
    }
}
