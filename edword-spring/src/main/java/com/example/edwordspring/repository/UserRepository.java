package com.example.edwordspring.repository;

import com.example.edwordspring.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
    User getUserByEmailAndPassword(String email, String password);

    @Query(value = "SELECT u.salt FROM users u WHERE u.email=?1", nativeQuery = true)
    String getSaltByEmail(String email);
}
