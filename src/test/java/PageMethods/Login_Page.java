package PageMethods;

import junit.framework.Assert;

import org.openqa.selenium.*;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;

import PageConstants.Login;
import PageElements.LoginPage;

public class Login_Page {

	private static WebElement element = null;

	public static WebElement Click_Signin(WebDriver driver) {

		element = driver.findElement(By.className(LoginPage.loginLink));

		return element;

	}

	public static WebElement Click_LogOut(WebDriver driver) {

		element = driver.findElement(By.className(LoginPage.logoutButtonLink));

		return element;

	}

	public static WebElement Enter_UserName(WebDriver driver) {

		element = driver.findElement(By.id(LoginPage.emailInputField));

		return element;

	}

	public static WebElement Enter_Password(WebDriver driver) {

		element = driver.findElement(By.id(LoginPage.passwordInputField));

		return element;

	}

	public static WebElement Click_LogIn(WebDriver driver) {

		element = driver.findElement(By.id(LoginPage.submitButton));

		return element;

	}

	public static void Verify_LogIn(WebDriver driver) {
		String title = driver.getTitle();
		System.out.println("Actual Title is" + title);
		Assert.assertEquals(Login.homePageTitle, title);

	}

}
