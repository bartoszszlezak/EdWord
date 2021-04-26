package com.example.edwordspring.controllers;

import com.example.edwordspring.models.User;
import com.example.edwordspring.models.WordSet;
import com.example.edwordspring.repository.UserRepository;
import com.example.edwordspring.repository.WordSetRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WordSetController {


    private final WordSetRepository wordSetRepository;
    private final UserRepository userRepository;

    @Autowired
    public WordSetController(WordSetRepository wordSetRepository, UserRepository userRepository) {
        this.wordSetRepository = wordSetRepository;
        this.userRepository = userRepository;
    }

    @GetMapping(value = "/wordsets")
    public Iterable<WordSet> getWordSets(){
        return wordSetRepository.findAll();
    }

    @GetMapping(value = "/add_wordsets")
    public void addWordSet() {
        User user = new User("bartunio", "bartunio@gmail.com", "bart1234");
        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        userRepository.save(user);
        WordSet wordSet = new WordSet("trip", "angielski", "ebe" ,user);
        wordSetRepository.save(wordSet);
    }

    @PostMapping(value = "/addset")
    public void createSet(@RequestBody JsonNode wordSet){

        Long id = wordSet.get("userId").asLong();
        User user = userRepository.findById(id).orElse(null);
        WordSet wordSet1 = new WordSet(
                wordSet.get("setName").asText(),
                wordSet.get("language").asText(),
                wordSet.get("photo").asText(),
                user
        );
        wordSetRepository.save(wordSet1);
    }
}
