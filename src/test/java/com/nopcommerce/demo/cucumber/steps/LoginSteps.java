package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LogInHomePage;
import com.nopcommerce.demo.pages.LogInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLogInLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
    }

    @And("^I should see welcome,please sign in! message$")
    public void iShouldSeeWelcomePleaseSignInMessage() {
        String expactedText = "Welcome, Please Sign In!";
        String actualText = new LogInPage().getTextFromWelcomeField();
        Assert.assertEquals("Text not match",expactedText,actualText);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LogInPage().clickOnLoginButton();
    }

    @Then("^I should see the error message$")
    public void iShouldSeeTheErrorMessage() {
        Assert.assertTrue(new LogInPage().getTextFromErrorMessage(),true);
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
    }

    @And("^I should see log out link$")
    public void iShouldSeeLogOutLink() {
        Assert.assertTrue(new LogInHomePage().logOutButonDisplayed());
    }

    @And("^I click on log out link$")
    public void iClickOnLogOutLink() {
        new LogInHomePage().clickOnLogOut();
    }

    @Then("^I should logout successfully$")
    public void iShouldLogoutSuccessfully() {
    }

    @And("^I should see login link$")
    public void iShouldSeeLoginLink() {
        Assert.assertTrue(new HomePage().logOutDisplayed());
    }
}
