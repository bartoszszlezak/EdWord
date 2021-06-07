package com.example.edwordspring.controllers;

import com.example.edwordspring.models.User;
import com.example.edwordspring.repository.UserRepository;
import com.example.edwordspring.security.JsonToken;
import com.sun.istack.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCrypt;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {


    private final UserRepository userRepository;
    private final JsonToken jsonToken;


    @Autowired
    public UserController(UserRepository userRepository, JsonToken jsonToken) {
        this.userRepository = userRepository;
        this.jsonToken = jsonToken;
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
        user.setRole("USER");
        userRepository.save(user);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> loggedUser(@RequestBody User details){
        System.out.println(details.getEmail() + " " + details.getPassword());

        String salt = userRepository.getSaltByEmail(details.getEmail());

        if(salt==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        User loginUser = userRepository.getUserByEmailAndPassword(
                details.getEmail(),
                BCrypt.hashpw(
                        details.getPassword(),
                        salt
                )
        );

        if(loginUser==null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        Pair<Long, String> userIdWithTokenPair = Pair.of(loginUser.getId(), jsonToken.generateToken(loginUser));
        return new ResponseEntity<>(userIdWithTokenPair, HttpStatus.OK);

    }


    @GetMapping("/add_admin")
    public void addUser() {
        User user = new User("BartekADMIN", "barmikszl@gmail.com", "admin11");
        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        user.setRole("ADMIN");
        userRepository.save(user);
    }

}
