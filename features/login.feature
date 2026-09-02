Feature: login

Scenario: Successful login using valid credentials
Given I am in login page of saucedemo
When I enter valid username
And I enter valid password
And I click on login button
Then user should be redirected to saucedemo inventory page
And swag labs app logo to be visible

@smoke
Scenario: Login using invalid credentials
Given I am in login page of saucedemo
When I enter valid invalid username
And I enter valid password
And I click on login button
Then user should get error message
And user should get sandeep defined error message