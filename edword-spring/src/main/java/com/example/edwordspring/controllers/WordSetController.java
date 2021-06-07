package com.example.edwordspring.controllers;

import com.example.edwordspring.models.User;
import com.example.edwordspring.models.Word;
import com.example.edwordspring.models.WordSet;
import com.example.edwordspring.repository.UserRepository;
import com.example.edwordspring.repository.WordRepository;
import com.example.edwordspring.repository.WordSetRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WordSetController {


    private final WordSetRepository wordSetRepository;
    private final UserRepository userRepository;
    private final WordRepository wordRepository;


    @Autowired
    public WordSetController(WordSetRepository wordSetRepository, UserRepository userRepository, WordRepository wordRepository) {
        this.wordSetRepository = wordSetRepository;
        this.userRepository = userRepository;
        this.wordRepository = wordRepository;
    }


    @GetMapping(value = "/wordsets/{id}")
    public Iterable<WordSet> getWordSets(@PathVariable("id") Long id){
        return wordSetRepository.getWordSetByUserId(id);
    }

    @GetMapping(value = "/wordsets/admin")
    public Iterable<WordSet> getWordSetsAdmin(){
        return wordSetRepository.findAll();
    }


    @PostMapping(value = "/addset")
    public Long createSet(@RequestBody JsonNode wordSet){

        Long id = wordSet.get("userId").asLong();
        User user = userRepository.findById(id).orElse(null);
        WordSet wordSet1 = new WordSet(
                wordSet.get("setName").asText(),
                wordSet.get("language").asText(),
                wordSet.get("setImage").asText(),
                user
        );
        wordSetRepository.save(wordSet1);
        return wordSet1.getId();
    }


    @GetMapping(value = "/wordset/image/{id}")
    public String getFile(@PathVariable("id") Long id){

        WordSet wordSet = wordSetRepository.findById(id).orElse(null);
        assert wordSet != null;
        return wordSet.getSetImage();
    }

    @GetMapping(value = "/wordset/words/{id}")
    public Iterable<Word> getWordSetWords(@PathVariable("id") Long id){
        return wordRepository.getWordsBySetId(id);
    }

    @GetMapping(value = "/wordset/words/{id}/{status}")
    public Iterable<Word> getWordSetWordsWithStatus(@PathVariable("id") Long id, @PathVariable("status") String status){
        return wordRepository.getWordsBySetIdWithStatus(id, status);
    }
}
