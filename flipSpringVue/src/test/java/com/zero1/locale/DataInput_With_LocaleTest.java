package com.zero1.locale;

import static org.junit.jupiter.api.Assertions.*;
import java.util.Locale;
import java.util.ResourceBundle;
import org.junit.jupiter.api.Test;

class DataInput_With_LocaleTest {

	@Test
	void testBundlesEnUS() {
		Locale locale = new Locale("en", "US");
		ResourceBundle msgs = ResourceBundle.getBundle("bundles.Msg_Bundle", locale);

		assertEquals("English", locale.getDisplayLanguage());
		assertEquals("Enter your First Name", msgs.getObject("fname"));
		assertEquals("Enter your Last Name", msgs.getObject("lname"));
		assertEquals("Date of Birth", msgs.getObject("dob") );
		assertEquals("Enter your email", msgs.getObject("email"));
		assertEquals("Phone Number", msgs.getObject("phone"));
	}
}