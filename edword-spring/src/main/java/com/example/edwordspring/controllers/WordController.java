package com.example.edwordspring.controllers;

import com.example.edwordspring.models.User;
import com.example.edwordspring.models.Word;
import com.example.edwordspring.models.WordSet;
import com.example.edwordspring.repository.UserRepository;
import com.example.edwordspring.repository.WordRepository;
import com.example.edwordspring.repository.WordSetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WordController {

    private final WordRepository wordRepository;
    private final UserRepository userRepository;
    private final WordSetRepository wordSetRepository;

    @Autowired
    public WordController(WordRepository wordRepository, WordSetRepository wordSetRepository, UserRepository userRepository) {
        this.wordRepository = wordRepository;
        this.userRepository = userRepository;
        this.wordSetRepository = wordSetRepository;
    }

    @GetMapping(value = "/add_word")
    public void addWord() {

        User user = new User("bartunio", "bartunio@gmail.com", "bart1234");
        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        userRepository.save(user);

        WordSet trip = new WordSet("podróże", "angielski", "beb" ,user);
        wordSetRepository.save(trip);
        Word word = new Word("samochód", "car", "learn", trip);
        Word word1 = new Word("drzwi", "door", "learn", trip);
        wordRepository.save(word);
        wordRepository.save(word1);

        WordSet house = new WordSet("dom", "angielski", "bebe",user);
        wordSetRepository.save(house);
        Word word2 = new Word("kuchnia", "kitchen", "learn", house);
        wordRepository.save(word2);
    }

    @GetMapping(value = "/words")
    public Iterable<Word> getWords(){
        return wordRepository.findAll();
    }
}
