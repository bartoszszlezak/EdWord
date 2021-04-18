package com.example.edwordspring.repository;

import com.example.edwordspring.models.WordSet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordSetRepository extends CrudRepository<WordSet, Long> {
}
