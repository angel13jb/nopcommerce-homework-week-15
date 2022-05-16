Feature: Login Test
  As user I want to login into nop commerce website

  Background: I am on homepage
  @sanity,@smoke,@regression
  Scenario: User should navigate to login page successfully
    When I click on login link
    Then I should navigate to login page successfully
    And I should see welcome,please sign in! message

  @smoke,@regression
  Scenario: Verify the error message with invalid credentials
    When I click on login link
    And  I enter email "sweety@gmail.com"
    And I enter password "smith1"
    And I click on login button
    Then I should see the error message

  @regression
  Scenario: User should login successfully with valid credentials
    When I click on login link
    And I enter email "sweetysmith@gmail.com"
    And I enter password "smith001"
    And I click on login button
    Then I should login successfully
    And I should see log out link

  @regression
  Scenario:  User should Logout successfully
    When I click on login link
    And I enter email "sweetysmith@gmail.com"
    And I enter password "smith001"
    And I click on login button
    And I click on log out link
    Then I should logout successfully
    And I should see login link







