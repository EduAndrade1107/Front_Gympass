Feature: Gyms Page

    Background: Login Page Search
        Given I am logged in Gympass webpage with valid "email" and "senha"
        And I select gym
        And a new page open

    Scenario: Select Gym Page
        When click favorite
        Then so I must see favorite gym