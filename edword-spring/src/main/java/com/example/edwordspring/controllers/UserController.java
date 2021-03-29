package com.example.edwordspring.controllers;

import com.example.edwordspring.models.User;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id){
        return new User("Bartosz", "Szlęzak", id);
    }

}
