// https://github.com/alvintwng/ntucLH/blob/master/mACapStoneProj3/LocaleEx/localeex/LocaleEx.java
package com.zero1.locale.localeex;

import java.util.Locale;

public class LocaleEx {
    public static void main(String[] args) {

        Locale locale = Locale.getDefault();

        System.out.println(" Country : " + locale.getDisplayCountry());
        System.out.println(" Display Language : " + locale.getDisplayLanguage());
        System.out.println(" Display Name : " + locale.getDisplayName());
        System.out.println(" ISO Country Code : " + locale.getISO3Country());
        System.out.println(" ISO Lang Code : " + locale.getISO3Language());
        System.out.println(" Langauge : " + locale.getLanguage());
        System.out.println(" Country : " + locale.getCountry());

        System.out.println(" Locale CHINESE :: " + Locale.CHINESE);
        System.out.println(" Locale SIMPLIFIED_CHINESE :: " + Locale.SIMPLIFIED_CHINESE);
        System.out.println(" Locale TRADITIONAL_CHINESE :: " + Locale.TRADITIONAL_CHINESE);
        System.out.println(" Locale TAIWAN :: " + Locale.TAIWAN);
        System.out.println(" Locale CHINA :: " + Locale.CHINA);
        System.out.println(" Locale PRC :: " + Locale.PRC);
        System.out.println(" Locale CHINESE :: " + Locale.CHINESE);

    }
}

/*
 * Sample dialogue
 Country : Singapore
 Display Language : English
 Display Name : English (Singapore)
 ISO Country Code : SGP
 ISO Lang Code : eng
 Langauge : en
 Country : SG
 Locale CHINESE :: zh
 Locale SIMPLIFIED_CHINESE :: zh_CN
 Locale TRADITIONAL_CHINESE :: zh_TW
 Locale TAIWAN :: zh_TW
 Locale CHINA :: zh_CN
 Locale PRC :: zh_CN
 Locale CHINESE :: zh
 */