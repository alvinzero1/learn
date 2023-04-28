package com.zero1.locale.localeex;

import java.util.Scanner;

public class DataInput_WO_Locale {

    public static Scanner myObj = new Scanner(System.in);

    public static void main(String[] args) {

        // myObj.useDelimiter("\n");

        System.out.print(" Enter you First Name ");
        String fname = "\n\tWelcome Mr/Ms. " + myObj.next();

        System.out.print(" Enter you Last Name ");
        fname += "  " + myObj.next();

        System.out.print(" Date Of Birth  ");
        fname += "\n\tYou were born on, " + myObj.next();

        System.out.print(" Enter your Email ");
        fname += ", we can reach you at " + myObj.next();

        System.out.print(" Phone Number ");
        fname += " or at " + myObj.next();

        System.out.println(fname);
    }
}