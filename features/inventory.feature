Feature: inventory page

Scenario: validate count of items in the inventory page
Given I am in login page of saucedemo
When I enter valid username
And I enter valid password
And I click on login button
Then user should be redirected to saucedemo inventory page
And swag labs app logo to be visible
When I click on add to cart button
Then item should be added to cart page
And item should be added to cart page sandeep