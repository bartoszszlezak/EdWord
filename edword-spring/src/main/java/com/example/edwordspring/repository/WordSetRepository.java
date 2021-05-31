package com.example.edwordspring.repository;

import com.example.edwordspring.models.WordSet;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface WordSetRepository extends CrudRepository<WordSet, Long> {
    @Transactional
    @Query(value = "SELECT * FROM wordsets WHERE owner_id=?1", nativeQuery = true)
    Iterable<WordSet> getWordSetByUserId(Long id);
}
