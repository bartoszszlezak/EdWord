package com.example.edwordspring.controllers;

import com.example.edwordspring.models.Word;
import com.example.edwordspring.models.WordSet;
import com.example.edwordspring.repository.UserRepository;
import com.example.edwordspring.repository.WordRepository;
import com.example.edwordspring.repository.WordSetRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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

    @GetMapping(value = "/words")
    public Iterable<Word> getWords(){
        return wordRepository.findAll();
    }

    @PostMapping(value = "/addword")
    public void addWord(@RequestBody ArrayList<JsonNode> data){

        data.forEach(jsonNode -> {
            Long id = jsonNode.get("setId").asLong();
            String content = jsonNode.get("word").asText();
            String translation = jsonNode.get("translation").asText();
            WordSet wordSet = wordSetRepository.findById(id).orElse(null);
            Word word = new Word(content, translation, "learn", wordSet);
            wordRepository.save(word);
        });

    }

    @GetMapping(value = "/word/update/{id}")
    public void updateWordStatus(@PathVariable("id") Long id){
        System.out.println("odebrałem puta");
        Word word = wordRepository.findById(id).orElse(null);
        assert word != null;
        word.setStatus("revision");
        wordRepository.save(word);
    }

}
