package com.example.edwordspring.repository;

import com.example.edwordspring.models.WordSet;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordSetRepository extends CrudRepository<WordSet, Long> {
    @Query(value = "SELECT * FROM set s WHERE s.owner_id=?1", nativeQuery = true)
    WordSet getWordSetByUserId(Long id);
}
