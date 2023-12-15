package com.example.adb_back.service;

import com.example.adb_back.dto.UserDto;
import com.example.adb_back.model.User;
import com.example.adb_back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private  UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void create(User user){
        userRepository.save(user);
    }

    public UserDto getById(String id){
        User user = userRepository.findById(id).get();
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setName(user.getName());
        userDto.setSurname(user.getSurname());
        userDto.setUsername(user.getUsername());
        return userDto;
    }

    public void delete(String id){
        User user = userRepository.findById(id).get();
        userRepository.delete(user);
    }

    public void update (String id, User userDto){
        User user = userRepository.findById(id).get();
        userDto.setEmail(user.getEmail());
        userDto.setName(user.getName());
        userDto.setSurname(user.getSurname());
        userDto.setUsername(user.getUsername());
        userRepository.save(userDto);

    }

    public User getByEmail(String email){
        List<User> users = userRepository.findAll();
        User newUser = new User();
        for (User user : users){
            if (Objects.equals(user.getEmail(), email)){
                newUser.setId(user.getId());
                newUser.setEmail(user.getEmail());
                newUser.setName(user.getName());
                newUser.setSurname(user.getSurname());
                newUser.setUsername(user.getUsername());
                newUser.setPassword(user.getPassword());
                break;
            }
        }
        return newUser;
    }

}
