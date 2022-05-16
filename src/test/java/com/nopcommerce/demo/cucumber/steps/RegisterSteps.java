package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import com.nopcommerce.demo.pages.RegisterSuccessPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();

    }

    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
    }

    @And("^I should see text register$")
    public void iShouldSeeTextRegister() {
        String expectedtext = "Register";
        String actualtext = new RegisterPage().getTextFromRegisterFiled();
        Assert.assertEquals("Text not match", expectedtext, actualtext);
    }


    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should verify error message$")
    public void iShouldVerifyErrorMessage() {
    }

    @And("^I should see error message firstname is required$")
    public void iShouldSeeErrorMessageFirstnameIsRequired() {
        String expactedFnameText = "First name is required.";
        String actualFnameText = new RegisterPage().geTextFromFNameErrorMessageField();
        Assert.assertEquals("Text not match", expactedFnameText, actualFnameText);
    }

    @And("^I should see error message lastname is required$")
    public void iShouldSeeErrorMessageLastnameIsRequired() {
        String expactedLnameText = "Last name is required.";
        String actualLnameText = new RegisterPage().geTextFromlNameErrorMessageField();
        Assert.assertEquals("Text not match", expactedLnameText, actualLnameText);
    }

    @And("^I should see error message email is required$")
    public void iShouldSeeErrorMessageEmailIsRequired() {
        String expactedEmailText = "Email is required.";
        String actualEmailText = new RegisterPage().geTextFromEmailErrorMessageField();
        Assert.assertEquals("Text not match", expactedEmailText, actualEmailText);
    }

    @And("^I should see error message password is required$")
    public void iShouldSeeErrorMessagePasswordIsRequired() {
        String expactedPassWordtext = "Password is required.";
        String actualPassEwordText = new RegisterPage().geTextFromPasswordErrorMessageField();
        Assert.assertEquals("Text not match", expactedPassWordtext, actualPassEwordText);
    }

    @And("^I click on female radio button$")
    public void iClickOnFemaleRadioButton() {
        new RegisterPage().clickOnFemaleRadioButton();
    }

    @And("^I enter firstname \"([^\"]*)\"$")
    public void iEnterFirstname(String fname) {
        new RegisterPage().enterFirstName(fname);
    }

    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String lname) {
        new RegisterPage().enterLastName(lname);
    }

    @And("^I select birthday \"([^\"]*)\"$")
    public void iSelectBirthday(String text) {
        new RegisterPage().selectDay(text);
    }

    @And("^I select birthmonth \"([^\"]*)\"$")
    public void iSelectBirthmonth(String text) {
        new RegisterPage().selectMonth(text);
    }

    @And("^I select birthyear \"([^\"]*)\"$")
    public void iSelectBirthyear(String text) {
        new RegisterPage().selectYear(text);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new RegisterPage().enterEmail(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new RegisterPage().enterPassword(password);
    }

    @And("^I enter confirmpassword \"([^\"]*)\"$")
    public void iEnterConfirmpassword(String confirmpassword) {
        new RegisterPage().confirmPassword(confirmpassword);
    }

    @Then("^I should create account successfully$")
    public void iShouldCreateAccountSuccessfully() {
    }

    @And("^I should see message your registration completed$")
    public void iShoulSeeMessageYuoeRegistrationCompleted() {
        String expactedtext = "Your registration completed";
        String actualtext = new RegisterSuccessPage().getTextFromRegSuccesfull();
        Assert.assertEquals("Message not displayed",expactedtext,actualtext);
    }
}