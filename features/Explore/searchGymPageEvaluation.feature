Feature: Gym Evaluation

    Background: Gym Page
        Given I am logged in Gympass webpage with valid "automacaoe2e@cowabunga.com" and "Gympass123"
        And I select gym
        And a new page open

    Scenario: Perform evaluation
        When I click write a review
        Then the evaluation mode is displayed