package com.example.edwordspring.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.Optional;
import java.util.Set;


@Entity
@Table(name = "wordsets")
public class WordSet implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String setName;

    @NotEmpty
    private String language;


    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "owner_id")
    private User owner;

    @JsonIgnore
    @OneToMany(mappedBy = "wordSet", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Word> words;

    @JsonIgnore
    @Lob
    private String setImage;


    public WordSet() {
    }

    public WordSet(@NotEmpty String setName, @NotEmpty String language, String photo, User owner) {
        this.setName = setName;
        this.language = language;
        this.setImage = photo;
        this.owner = owner;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSetName() {
        return setName;
    }

    public void setSetName(String setName) {
        this.setName = setName;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Set<Word> getWords() {
        return words;
    }

    public void setWords(Set<Word> words) {
        this.words = words;
    }

    public String getSetImage() {
        return setImage;
    }

    public void setSetImage(String setImage) {
        this.setImage = setImage;
    }

    @Override
    public String toString() {
        return "WordSet{" +
                "id=" + id +
                ", setName='" + setName + '\'' +
                ", language='" + language + '\'' +
                ", owner=" + owner +
                ", words=" + words +
                ", setImage=" + setImage +
                '}';
    }


}
