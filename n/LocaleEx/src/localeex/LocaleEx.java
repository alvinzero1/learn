//.../mACapStoneProj3/LocaleEx
package localeex;

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

        locale = new Locale("fr");
        System.out.println(" Locale :: " + locale);

        locale = new Locale("en", "US");
        System.out.println(" Locale :: " + locale);

        locale = new Locale("en", "US", "NY");
        System.out.println(" Locale :: " + locale);
    }

}

/* Sample Dialogue
run:
 Country : Singapore
 Display Language : English
 Display Name : English (Singapore)
 ISO Country Code : SGP
 ISO Lang Code : eng
 Langauge : en
 Country : SG
 Locale :: fr
 Locale :: en_US
 Locale :: en_US_NY
BUILD SUCCESSFUL (total time: 0 seconds)
*/