package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogInPage extends Utility {
    private static final Logger log = LogManager.getLogger(LogInPage.class.getName());
    public LogInPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailFiled;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordField;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Log in']")
    WebElement logInButton;
    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Welcome, Please Sign In!']")
    WebElement welcomeSignInMessage;
    @CacheLookup
    @FindBy(xpath = "//li[normalize-space()='No customer account found']")
    WebElement errorMessageField;


    public void enterEmail(String email) {
        sendTextToElement(emailFiled, email);
        log.info("Enter email "+ email + " to email field " + emailFiled.getText());
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Enter password "+ password + " to password field " + passwordField.getText());
    }

    public String getTextFromWelcomeField() {
        log.info("Getting text from : " + welcomeSignInMessage.toString());
        return getTextFromElement(welcomeSignInMessage);
    }
    public void clickOnLoginButton(){
        clickOnElement(logInButton);
        log.info("Clicking on LoginButton : " + logInButton.toString());
    }
    public  String getTextFromErrorMessage(){
        log.info("Getting text from : " + errorMessageField.toString());
        return  getTextFromElement(errorMessageField);
    }
}
