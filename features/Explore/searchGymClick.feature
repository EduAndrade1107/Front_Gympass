Feature: Gyms Search Enter

    Background: Page Search
        Given I am logged in Gympass webpage with valid "automacaoe2e@cowabunga.com" and "Gympass123"
        And I click on my Gyms

    Scenario: Gym Click
        When I enter the name of the academy
        And click Enter
        Then so I see only one card in the search