package amazonTestFiles;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class cucumberJava {
    WebDriver driver;
    WebDriverWait driverwait;
    String itemInfo;

    @Before public void setUp(){
        //Need to setup correct path to chromedriver here
        System.setProperty("webdriver.chrome.driver", "c://chromedriver//chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        driver = new ChromeDriver(options);
        driverwait = new WebDriverWait(driver,120);
    }

    @Given("^User has open the browser to (.*?)$")
    public void open_url(String url) {
        driver.navigate().to(url);
    }

    @When("^User writes (.*?) to search bar$")
    public void searchNikon(String item) {
        driver.findElement(By.id("twotabsearchtextbox")).sendKeys(item);
        driver.findElement(By.className("nav-input")).click();
    }

    @Then("^User sees (.*?) cameras$")
    public void checkItemAvailability(String name) {
        driverwait.until(ExpectedConditions.visibilityOfElementLocated(By.id("bcKwText")));
        WebElement element = driver.findElement(By.id("bcKwText"));
        String text = element.getText();
        assert text.contains(name);
    }

    @When("^User sorts results from highest price to lowest$")
    public void sortResultsFromHighesttolowest() {
        Select dropDown = new Select(driver.findElement(By.id("sort")));
        dropDown.selectByValue("price-desc-rank");
    }

    @And("^Selects item number (\\d+)$")
    public void selectItemNbr(int item) {
        driverwait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("html/body/div[1]/div[1]/div/div[3]/div[2]/div/div[4]/div[1]/div/ul/li[" + Integer.toString(item) + "]/div/div/div")));
        WebElement element = driver.findElement(By.xpath("html/body/div[1]/div[1]/div/div[3]/div[2]/div/div[4]/div[1]/div/ul/li[" + Integer.toString(item) + "]/div/div/div"));
        itemInfo = element.getText();
    }

    @Then("^Item should contain text (.*?)$")
    public void checkTheItemName(String name) {
        assert itemInfo.contains(name);
    }

    @After
    public void cleanUp(){
        driver.close();
    }
}