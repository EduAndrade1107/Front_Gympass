Feature: Menu Search

    Background: Login
        Given I am logged in Gympass webpage with valid "email" and "senha"

    Scenario: Click filters
        When I click on my Gyms
        Then I see button Filters
        And I click the button Filters
