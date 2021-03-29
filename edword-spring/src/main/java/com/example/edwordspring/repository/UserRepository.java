package com.example.edwordspring.repository;

import com.example.edwordspring.models.User;
import org.springframework.data.repository.CrudRepository;

public class UserRepository extends CrudRepository<User, Long> {
}
