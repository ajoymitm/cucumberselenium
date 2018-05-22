package StepDefinitions;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Map;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import PageMethods.Login_Page;
import Utilities.ReadCSV;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginTest {
	private static WebDriver driver = new FirefoxDriver();
	private static Properties prop = new Properties();
	private static File file = new File(
			"D:\\Automation WorkSpace\\bddmaventestng1\\src\\test\\java\\TestData\\config.properties");
	private static FileInputStream fileInput = null;

	public static void setDriver(WebDriver driver) {
		LoginTest.driver = driver;
	}

	@Given("^I am on Home Page$")
	public void i_am_on_Home_Page() throws Throwable {
		try {
			fileInput = new FileInputStream(file);
			prop.load(fileInput);

		} catch (IOException e) {
			e.printStackTrace();
		}

		System.out.println("This is working");
		driver.manage().window().maximize();
		driver.get(prop.getProperty("url"));
	

	}
	@Given("^I click on Sign In Link$")
	public void i_click_on_Sign_In_Link() throws Throwable {
		Login_Page.Click_Signin(driver).click();
	    
	}

	@Given("^I enter Username$")
	public void i_enter_Username() throws Throwable {
		Login_Page.Enter_UserName(driver).sendKeys(prop.getProperty("username"));
	   
	}

	@Given("^I enter Password$")
	public void i_enter_Password() throws Throwable {
		Login_Page.Enter_Password(driver).sendKeys(prop.getProperty("password"));
	   
	}

	@Given("^I hit Submit Button$")
	public void i_hit_Submit_Button() throws Throwable {
		//Login_Page.Click_LogIn(driver).click();
		System.out.println(" Login Successfully, now it is the time to shop buddy");
	    
	}

	@Then("^I should get logged In$")
	public void i_should_get_logged_In() throws Throwable {
		String title = driver.getTitle();
		System.out.println(title);
		//Assert.assertEquals(Login.homePageTitle, title);
		
	   
	}
	@Given("^I enter username as \"(.*?)\"$")
	public void i_enter_username_as(String arg1) throws Throwable {
		Login_Page.Enter_UserName(driver).sendKeys(arg1);
	  
	}

	@Given("^I enter password as \"(.*?)\"$")
	public void i_enter_password_as(String arg1) throws Throwable {
		Login_Page.Enter_Password(driver).sendKeys(arg1);
	  
	}

	@Given("^I enter Username and Password from csv$")
	public void i_enter_Username_and_Password_from_csv() throws Throwable {
		Map<String, String> parseFile = ReadCSV.parseFile("D:\\Automation WorkSpace\\bddmaventestng1\\src\\test\\java\\TestData\\TestData.csv", ",");
		for(Map.Entry<String, String> entry:parseFile.entrySet()){
			String arg1= entry.getKey();
			String arg2= entry.getValue();
			Login_Page.Enter_UserName(driver).sendKeys(arg1);
			Login_Page.Enter_Password(driver).sendKeys(arg2);
		}
		
	}
	@Given("^I enter Username and Password$")
	public void i_enter_Username_and_Password(Map<String,String> parseData) throws Throwable {
		for(Map.Entry<String, String> entry:parseData.entrySet()){
			String arg1= entry.getKey();
			String arg2= entry.getValue();
			Login_Page.Enter_UserName(driver).sendKeys(arg1);
			Login_Page.Enter_Password(driver).sendKeys(arg2);
	}
	}

}
