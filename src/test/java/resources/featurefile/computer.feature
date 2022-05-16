Feature: Computer Test
  As a user I want to bulid my product and add to cart into nopcommerce website

  Background: I am on homepage
  @sanity,@smoke,@regression
  Scenario: Verify user should navigate to computer page successfully
    When I click on computer link
    Then I should navigate to computer page successfully
    And I should see computer text

  @smoke,@regression
  Scenario: Verify user should navigate to desktops page successfully
    When I click on computer link
    And I click on desktops link
    Then I should navigate to desktops page successfully
    And I should see desktops text

  @regression
  Scenario Outline: Verify that user should build own computer and add them to cart successfully
    When I click on computer link
    And I click on desktops link
    And I click on product name build your own computer
    And I select processor "<processor>"
    And I select ram "<ram>"
    And I select hdd "<hdd>"
    And I select os "<os>"
    And I slect software "<software>"
    And I click on add to cart button
    Then I should add my computer to cart successfully
    And I should see message that the product has been added to your shoppint cart
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |

      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |

      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |
