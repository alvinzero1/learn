package com.zero1.locale.localeex;

import java.util.Locale;

public class LocaleEx1 {
    public static void main(String[] args) {

        Locale locale = new Locale("fr");
        System.out.println(" Locale :: " + locale);

        locale = new Locale("en", "US");
        System.out.println(" Locale :: " + locale);

        locale = new Locale("en", "US", "NY");
        System.out.println(" Locale :: " + locale);
        System.out.println(" Display Language : " + locale.getDisplayLanguage());

        locale = new Locale("zh");
        System.out.println(" Locale :: " + locale);
        System.out.println(" Display Language : " + locale.getDisplayLanguage());
        
    }
}

/*
 * Sample Dialogue
 * Locale :: fr
 * Locale :: en_US
 * Locale :: en_US_NY
 */