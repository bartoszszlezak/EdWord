package com.example.edwordspring.repository;

public class KeyRepository {
    private final static String signInKey = "123AOVR61AZW00M2BR5QLP48173X";

    public static String getSigningKey() {
        return signInKey;
    }
}
