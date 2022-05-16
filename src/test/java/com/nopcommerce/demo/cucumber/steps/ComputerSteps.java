package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @When("^I click on computer link$")
    public void iClickOnComputerLink() {
        new HomePage().clickOnComputerLink();
    }

    @Then("^I should navigate to computer page successfully$")
    public void iShouldNavigateToComputerPageSuccessfully() {
    }

    @And("^I should see computer text$")
    public void iShouldSeeComputerText() {
        String expactedtext = "Computers";
        String actualText = new ComputerPage().gettextFromComputerField();
        Assert.assertEquals("Text not match",expactedtext,actualText);
    }

    @And("^I click on desktops link$")
    public void iClickOnDesktopsLink() {
        new ComputerPage().clickOndeskTop();
    }

    @Then("^I should navigate to desktops page successfully$")
    public void iShouldNavigateToDesktopsPageSuccessfully() {
    }

    @And("^I should see desktops text$")
    public void iShouldSeeDesktopsText() {
        String expactedtext = "Desktops";
        String actualtext = new DesktopPage().getTextfromDesktopFiled();
        Assert.assertEquals("Text not match",expactedtext,actualtext);

    }

    @And("^I click on product name build your own computer$")
    public void iClickOnProductNameBuildYourOwnComputer() {
        new DesktopPage().clickOnBuildYoueOwnComputer();
    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor)  {
        new BuildYourOwnComputerPage().selectProcessorFromDropDown(processor);
    }

    @And("^I select ram \"([^\"]*)\"$")
    public void iSelectRam(String ram)  {
        new BuildYourOwnComputerPage().selectRamFromDropDown(ram);
    }

    @And("^I select hdd \"([^\"]*)\"$")
    public void iSelectHdd(String hdd)  {
       new BuildYourOwnComputerPage().clickOnHddFormRadioButton(hdd);
    }

    @And("^I select os \"([^\"]*)\"$")
    public void iSelectOs(String os)  {
        new BuildYourOwnComputerPage().clickOnOsFormRadioButton(os);
    }

    @And("^I slect software \"([^\"]*)\"$")
    public void iSlectSoftware(String software)  {
        new BuildYourOwnComputerPage().selectSoftwareCheckBox(software);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I should add my computer to cart successfully$")
    public void iShouldAddMyComputerToCartSuccessfully() {
    }

    @And("^I should see message that the product has been added to your shoppint cart$")
    public void iShouldSeeMessageThatTheProductHasBeenAddedToYourShoppintCart() {
        String expactedtext="The product has been added to your shopping cart";
        String actualtext=new BuildYourOwnComputerPage().getVerifyAddToCartText();
       Assert.assertEquals("Text not match",expactedtext,actualtext);
    }
}
