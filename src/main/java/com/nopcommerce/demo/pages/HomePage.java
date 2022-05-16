package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']")
    WebElement computerField;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Electronics']")
    WebElement electronicField;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Apparel']")
    WebElement appearlField;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Digital downloads']")
    WebElement digitalDownloadField;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Books']")
    WebElement bookField;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Jewelry']")
    WebElement jeweleryField;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Gift Cards']")
    WebElement giftCardField;
    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-login']")
    WebElement logInLinkField;
    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement registerLinkFiled;
    @CacheLookup
    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement logo;


    public void clickOnRegisterLink() {
        clickOnElement(registerLinkFiled);
        log.info("Clicking on register link : " + registerLinkFiled.toString());
    }

    public void clickOnLogInLink() {
        clickOnElement(logInLinkField);
        log.info("Clicking on login link : " + logInLinkField.toString());
    }

    public boolean logOutDisplayed() {
        log.info("logOutDisplayed : " + logInLinkField.toString());
        return logInLinkField.isDisplayed();
    }

    public void clickOnComputerLink() {
        clickOnElement(computerField);
        log.info("Clicking on ComputerLink : " + computerField.toString());
    }

}
