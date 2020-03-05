Feature: Menu Search

    Background: Login
        Given I am logged in Gympass webpage with valid "automacaoe2e@cowabunga.com" and "Gympass123"

    Scenario: Click filters
        When I click on my Gyms
        Then I see button Filters
        And I click the button Filters
