package com.example.edwordspring.repository;

import com.example.edwordspring.models.Word;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordRepository extends CrudRepository<Word, Long> {
    @Query(value = "SELECT * FROM word w WHERE w.set_id=?1", nativeQuery = true)
    Word getWordsBySetId(Long id);
}
