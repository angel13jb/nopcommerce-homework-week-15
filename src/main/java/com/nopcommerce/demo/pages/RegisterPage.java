package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Register']")
    WebElement registerTextField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement femalradioButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dayDropDownField;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement monthDropDwonField;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement yearDropDwonField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passWordField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPassowordField;

    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement registerButtonField;

    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement fNameErrorMessageField;

    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lNameErrorMessageField;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailErrorMessageField;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordErrorMessageField;

    @CacheLookup
    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement confirmPasswordErrorMessageField;



    public String getTextFromRegisterFiled() {
        log.info("Getting text from : " + registerTextField.toString());
        return getTextFromElement(registerTextField);
    }

    public void clickOnRegisterButton() {
        clickOnElement(registerButtonField);
        log.info("Clicking on RegisterButton : " + registerButtonField.toString());
    }

    public String geTextFromFNameErrorMessageField() {
        log.info("Getting text from : " + fNameErrorMessageField.toString());
        return getTextFromElement(fNameErrorMessageField);
    }

    public String geTextFromlNameErrorMessageField() {
        log.info("Getting text from : " + lNameErrorMessageField.toString());
        return getTextFromElement(lNameErrorMessageField);
    }

    public String geTextFromEmailErrorMessageField() {
        log.info("Getting text from : " + emailErrorMessageField.toString());
        return getTextFromElement(emailErrorMessageField);
    }

    public String geTextFromPasswordErrorMessageField() {
        log.info("Getting text from : " + passwordErrorMessageField.toString());
        return getTextFromElement(passwordErrorMessageField);
    }

    public String geTextFromConfirmPasswordErrorMessageField() {
        log.info("Getting text from : " + confirmPasswordErrorMessageField.toString());
        return getTextFromElement(confirmPasswordErrorMessageField);
    }

    public void clickOnFemaleRadioButton() {
        clickOnElement(femalradioButton);
        log.info("Clicking on FemaleRadioButton : " + femalradioButton.toString());
    }

    public void enterFirstName(String fName) {
        sendTextToElement(firstNameField, fName);
        log.info("Enter firstname :"+fName+" to firstname field "+firstNameField.getText());
    }

    public void enterLastName(String lName) {
        sendTextToElement(lastNameField, lName);
        log.info("Enter LastName :"+lName+" to lastName field "+lastNameField.getText());

    }

    public void selectDay(String text) {
        selectByVisibleTextFromDropDown(dayDropDownField, text);
        log.info("select Day :"+text);
    }

    public void selectMonth(String text) {
        selectByVisibleTextFromDropDown(monthDropDwonField, text);
        log.info("select Month :"+text);
    }

    public void selectYear(String text) {
        selectByVisibleTextFromDropDown(yearDropDwonField, text);
        log.info("select year :"+text);
    }

    public void enterEmail(String email) {
        sendTextToElement(emailField, email);
        log.info("Enter Email :"+email+" to emailfield "+emailField.getText());
    }

    public void enterPassword(String password) {
        sendTextToElement(passWordField, password);
        log.info("Enter Password :"+password+" to passWordField "+passWordField.getText());
    }

    public void confirmPassword(String confirmpasword) {
        sendTextToElement(confirmPassowordField, confirmpasword);
        log.info("Enter confirmPassword :"+confirmpasword+" to confirmPassoword field "+confirmPassowordField.getText());
    }


}
