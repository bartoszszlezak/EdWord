package com.example.edwordspring.repository;

import com.example.edwordspring.models.Word;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WordRepository extends CrudRepository<Word, Long> {
    @Query(value = "SELECT * FROM words w WHERE w.word_set_id=?1", nativeQuery = true)
    List<Word> getWordsBySetId(Long id);

    @Query(value = "SELECT * FROM words WHERE word_set_id=?1 AND status=?2", nativeQuery = true)
    List<Word> getWordsBySetIdWithStatus(Long id, String status);
}
