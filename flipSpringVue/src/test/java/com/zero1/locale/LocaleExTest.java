package com.zero1.locale;

import static org.junit.jupiter.api.Assertions.*;
import java.util.Locale;
import org.junit.jupiter.api.Test;

class LocaleExTest {

	@Test
	void testDefault() {
		Locale locale = Locale.getDefault();
		assertEquals("SG", locale.getCountry());
	}
}