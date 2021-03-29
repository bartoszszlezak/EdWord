package com.example.edwordspring.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class User {

    private String name;
    private String surname;

    @Id
    @GeneratedValue
    private Long id;

    public User(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User(String name, String surname, Long id) {
        this.name = name;
        this.surname = surname;
        this.id = id;
    }

}
