package com.autonomy.abc.selenium.language;

import java.util.HashMap;
import java.util.Map;

// hardcoded strings can be problematic
// add new languages here as necessary
public enum Language {
    AFRIKAANS("Afrikaans"),
    ARABIC("Arabic"),
    CHINESE("Chinese"),
    ENGLISH("English"),
    FRENCH("French"),
    HINDI("Hindi"),
    SWAHILI("Swahili"),
    URDU("Urdu");

    private String name;

    Language(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }
}
