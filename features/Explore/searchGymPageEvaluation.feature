Feature: Gym Evaluation

    Background: Login Gym Page
        Given I am logged in Gympass webpage with valid "email" and "senha"
        And I select gym
        And a new page open

    Scenario: Perform evaluation
        When I click write a review
        Then the evaluation mode is displayed