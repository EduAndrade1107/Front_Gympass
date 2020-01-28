Feature: Gyms Search

    Background: Page Search
        Given I am logged in Gympass webpage with valid "automacaoe2e@cowabunga.com" and "Gympass123"
        And I select gym
        And a new page open

    Scenario: Select Gym
        When click favorite
        Then so I must see favorite gym