package com.shortUrl.Short.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    String original;
    String shortened;
    public User(){}
    public User(String original,String shortened){
        this.original=original;
        this.shortened=shortened;
    }

    public void setShortened(String shortened) {
        this.shortened = shortened;
    }

    public void setOriginal(String original) {
        this.original = original;
    }

    public String getShortened() {
        return shortened;
    }

    public String getOriginal() {
        return original;
    }

    public Long getId() {
        return id;
    }
}
