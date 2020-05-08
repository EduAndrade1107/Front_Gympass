Feature: Filters Search

    Background: Login
        Given I am logged in Gympass webpage with valid "automacaoe2e@cowabunga.com" and "Gympass123"
        When I click on my Gyms
        Then I see button Filters
        And I click the button Filters

    Scenario: Validate Filters

        And click value plan
        And click hour functioning 24hs
        And click owns
        # And click order by
        And click button to apply filters