package com.example.edwordspring.controllers;

import com.example.edwordspring.models.User;
import com.example.edwordspring.repository.UserRepository;
import com.sun.istack.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCrypt;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping(value = "/users/{email}")
    @Nullable
    public User getUser(@PathVariable("email") String email){
        Optional<User> optionalUser = Optional.ofNullable(userRepository.findByEmail(email));
        return optionalUser.orElse(null);
    }

    @GetMapping("/users")
    public Iterable<User> getUsers(){
        return userRepository.findAll();
    }

    @PostMapping(value = "/registration")
    public void registration(@RequestBody User user){

        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        userRepository.save(user);
    }

    @PostMapping(value = "/login")
    public User loggedUser(@RequestBody User details){
        System.out.println(details.getEmail() + " " + details.getPassword());

        String salt = userRepository.getSaltByEmail(details.getEmail());

        if(salt==null){
            return null;
        }

        User loginUser = userRepository.getUserByEmailAndPassword(
                details.getEmail(),
                BCrypt.hashpw(
                        details.getPassword(),
                        salt
                )
        );

        return loginUser;
    }


    @GetMapping("/add_user")
    public void adaUser() {
        User user = new User("bartunio", "bartunio@gmail.com", "bartunio");
        userRepository.save(user);
    }

}
