$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a user I want to bulid my product and add to cart into nopcommerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5307875699,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to computer page successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity,"
    },
    {
      "line": 5,
      "name": "@smoke,"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to computer page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see computer text",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 716847401,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 25500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeComputerText()"
});
formatter.result({
  "duration": 39133700,
  "status": "passed"
});
formatter.after({
  "duration": 705605399,
  "status": "passed"
});
formatter.before({
  "duration": 2829090699,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Verify user should navigate to desktops page successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke,"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to desktops page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see desktops text",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 524104000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 457368800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 27099,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeDesktopsText()"
});
formatter.result({
  "duration": 10395400,
  "error_message": "java.lang.StackOverflowError\r\n\tat java.lang.StringBuilder.append(StringBuilder.java:136)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.getTextfromDesktopFiled(DesktopPage.java:27)\r\n\tat ✽.And I should see desktops text(computer.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 906743600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify that user should build own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select os \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I slect software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should add my computer to cart successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should see message that the product has been added to your shoppint cart",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 35,
      "id": "computer-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 37,
      "id": "computer-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3512870201,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 33,
  "name": "Verify that user should build own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I slect software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should add my computer to cart successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should see message that the product has been added to your shoppint cart",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 533401300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 443573500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 518831500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 110488000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 94157500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 84589599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 77284799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSlectSoftware(String)"
});
formatter.result({
  "duration": 71192800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 59982401,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAddMyComputerToCartSuccessfully()"
});
formatter.result({
  "duration": 23800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeMessageThatTheProductHasBeenAddedToYourShoppintCart()"
});
formatter.result({
  "duration": 274243599,
  "status": "passed"
});
formatter.after({
  "duration": 714478500,
  "status": "passed"
});
formatter.before({
  "duration": 2076920000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "Verify that user should build own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I slect software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should add my computer to cart successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should see message that the product has been added to your shoppint cart",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 530015501,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 447721500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 592160000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 57930201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 85766000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 102094200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 94241801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSlectSoftware(String)"
});
formatter.result({
  "duration": 86501501,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 60094699,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAddMyComputerToCartSuccessfully()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeMessageThatTheProductHasBeenAddedToYourShoppintCart()"
});
formatter.result({
  "duration": 294302700,
  "status": "passed"
});
formatter.after({
  "duration": 698726601,
  "status": "passed"
});
formatter.before({
  "duration": 2750623801,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 37,
  "name": "Verify that user should build own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I slect software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should add my computer to cart successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should see message that the product has been added to your shoppint cart",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 544436200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 450404801,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 550299799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 55493100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 88312601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 86344600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 72364300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSlectSoftware(String)"
});
formatter.result({
  "duration": 104715199,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 64628300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAddMyComputerToCartSuccessfully()"
});
formatter.result({
  "duration": 14800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeMessageThatTheProductHasBeenAddedToYourShoppintCart()"
});
formatter.result({
  "duration": 289553800,
  "status": "passed"
});
formatter.after({
  "duration": 706674099,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2756666300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity,"
    },
    {
      "line": 5,
      "name": "@smoke,"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see welcome,please sign in! message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 484828400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 21301,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeWelcomePleaseSignInMessage()"
});
formatter.result({
  "duration": 33376800,
  "status": "passed"
});
formatter.after({
  "duration": 688951100,
  "status": "passed"
});
formatter.before({
  "duration": 2157877299,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke,"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"sweety@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"smith1\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 539450600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sweety@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 111623400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith1",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 101162100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 418953200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 33137200,
  "status": "passed"
});
formatter.after({
  "duration": 690423900,
  "status": "passed"
});
formatter.before({
  "duration": 2759335500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter email \"sweetysmith@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"smith001\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I should see log out link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 480614999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sweetysmith@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 101979700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith001",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 98980200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 429086700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 21799,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeLogOutLink()"
});
formatter.result({
  "duration": 40069118800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-logout\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027JALPA\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ef5fd343647f3cc0f69e362e96e651bd, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-logout\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\bhave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52334}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52334/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ef5fd343647f3cc0f69e362e96e651bd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.LogInHomePage.logOutButonDisplayed(LogInHomePage.java:24)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iShouldSeeLogOutLink(LoginSteps.java:44)\r\n\tat ✽.And I should see log out link(login.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 883022400,
  "status": "passed"
});
formatter.before({
  "duration": 2793825600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 29,
  "name": "User should Logout successfully",
  "description": "",
  "id": "login-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"sweetysmith@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"smith001\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I should see login link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 677952999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sweetysmith@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 105548300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith001",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 90918600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 434303300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 20050017401,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-logout\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027JALPA\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a42207fe1b8cdf266ef7365fb73d540a, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-logout\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\bhave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52396}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52396/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a42207fe1b8cdf266ef7365fb73d540a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.LogInHomePage.clickOnLogOut(LogInHomePage.java:28)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iClickOnLogOutLink(LoginSteps.java:49)\r\n\tat ✽.And I click on log out link(login.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeLoginLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 886842300,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As user I want to register into nopcommerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2110208600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity,"
    },
    {
      "line": 5,
      "name": "@smoke,"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see text register",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 625053100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeTextRegister()"
});
formatter.result({
  "duration": 32631501,
  "status": "passed"
});
formatter.after({
  "duration": 683803200,
  "status": "passed"
});
formatter.before({
  "duration": 2099277000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Verify that Firstname,Lastname,Email,Password and ConfirmPassword fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname,lastname,email,password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke,"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should verify error message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see error message firstname is required",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message lastname is required",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see error message email is required",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see error message password is required",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 515060300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 78242000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldVerifyErrorMessage()"
});
formatter.result({
  "duration": 125600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeErrorMessageFirstnameIsRequired()"
});
formatter.result({
  "duration": 37824799,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeErrorMessageLastnameIsRequired()"
});
formatter.result({
  "duration": 30988200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeErrorMessageEmailIsRequired()"
});
formatter.result({
  "duration": 32510099,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeErrorMessagePasswordIsRequired()"
});
formatter.result({
  "duration": 31380400,
  "status": "passed"
});
formatter.after({
  "duration": 680088900,
  "status": "passed"
});
formatter.before({
  "duration": 2764004000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 22,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on female radio button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter firstname \"sweety\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter lastname \"smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select birthday \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select birthmonth \"January\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select birthyear \"1998\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"sweetysmith@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"smith001\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter confirmpassword \"smith001\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should create account successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I should see message your registration completed",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 482028500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnFemaleRadioButton()"
});
formatter.result({
  "duration": 68164600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sweety",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 103533300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 97447701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iSelectBirthday(String)"
});
formatter.result({
  "duration": 83184800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 21
    }
  ],
  "location": "RegisterSteps.iSelectBirthmonth(String)"
});
formatter.result({
  "duration": 82783300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1998",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iSelectBirthyear(String)"
});
formatter.result({
  "duration": 80162200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sweetysmith@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 109878801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith001",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 97409400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith001",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.iEnterConfirmpassword(String)"
});
formatter.result({
  "duration": 95927700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 725291801,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldCreateAccountSuccessfully()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShoulSeeMessageYuoeRegistrationCompleted()"
});
formatter.result({
  "duration": 31710100,
  "status": "passed"
});
formatter.after({
  "duration": 683022600,
  "status": "passed"
});
});