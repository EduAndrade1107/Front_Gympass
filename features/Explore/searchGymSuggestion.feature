Feature: Gyms Search List Suggestion

    Background: Login
        Given I am logged in Gympass webpage with valid "email" and "senha"
        And I click on my Gyms

    Scenario: Select Gym Suggestion
        When I enter the name of the academy
        And click Gym List
        And a new page open
        Then so I must see favorite gym