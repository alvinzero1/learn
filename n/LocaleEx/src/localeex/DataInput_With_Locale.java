package localeex;

import java.util.Locale;
import java.util.ResourceBundle;
import java.util.Scanner;

public class DataInput_With_Locale {

    public static Scanner myObj = new Scanner(System.in);

    public static void main(String[] args) {

        //String language = args[0];
        //String country = args[1];
        // myObj.useDelimiter("\n"); // Dont need if run on VSCode
        System.out.print("Enter the language [en/es/fr] : ");
        String language = myObj.next();
        System.out.print("Enter the country code [US/ES/FR] : ");
        String country = myObj.next();

        Locale locale = new Locale(language, country);

        System.out.println(" Locale finalized :::: " + locale.getDisplayLanguage());

        ResourceBundle msgs = ResourceBundle.getBundle("bundles.Msg_Bundle", locale);

        System.out.print(msgs.getObject("fname") + " : ");
        String fname = "\n\tWelcome 2 Mr/Ms. " + myObj.next();

        System.out.print(msgs.getObject("lname") + " : ");
        fname += "  " + myObj.next();

        System.out.print(msgs.getObject("dob") + " : ");
        fname += "\n\tYou were born on, " + myObj.next();

        System.out.print(msgs.getObject("email") + " : ");
        fname += ", we can reach you at " + myObj.next();

        System.out.print(msgs.getObject("phone") + " : ");
        fname += " or at " + myObj.next();

        System.out.println(fname);
    }
}

/* Sample Dialogue
run:
Enter the language [en/es/fr] : en
Enter the country code [US/ES/FR] : US
 Locale finalized :::: English
Enter your First Name : Alvin
Enter your Last Name : Ng
Date of Birth : feb 1963
Enter your email : abc@abc.co
Phone Number : 12345678

	Welcome 2 Mr/Ms. Alvin  Ng
	You were born on, feb 1963, we can reach you at abc@abc.co or at 12345678
BUILD SUCCESSFUL (total time: 33 seconds)
*/