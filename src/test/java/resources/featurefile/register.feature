Feature: Register Test
  As user I want to register into nopcommerce website

  Background: I am on homepage
 @sanity,@smoke,@regression
  Scenario: Verify user should navigate to register page successfully
    When I click on register link
    Then I should navigate to register page successfully
    And I should see text register

 @smoke,@regression
  Scenario: Verify that Firstname,Lastname,Email,Password and ConfirmPassword fields are mandatory
    When I click on register link
    And I click on register button
    Then I should verify error message
    And I should see error message firstname is required
    And I should see error message lastname is required
    And I should see error message email is required
    And I should see error message password is required

 @regression
  Scenario: User should create account successfully
    When I click on register link
    And I click on female radio button
    And I enter firstname "sweety"
    And I enter lastname "smith"
    And I select birthday "10"
    And I select birthmonth "January"
    And I select birthyear "1998"
    And I enter email "sweetysmith@gmail.com"
    And I enter password "smith001"
    And I enter confirmpassword "smith001"
    And I click on register button
    Then I should create account successfully
    And I should see message your registration completed