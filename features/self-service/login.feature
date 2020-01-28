# Feature: Login

# Background:
#     Given I am in Gympass home page
#     When I click on Log In button    

# Scenario Outline: Login with success

#         And I insert an email "<email>"
#         And I click on Continue button
#         And I insert a password "<password>"
#         And I click on Continue button
#     Then I should be redirected to Logged Home page
   
# Examples:
# | email          | password |
# | user@email.com | password |

# Scenario Outline: Facebook Login with success

#         And I insert an email "<email>"
#         And I click on Continue button
#         And I click on Facebook Login button
#         And I insert a Facebook email "<facebookEmail>"
#         And I insert a Facebook password "<facebookPassword>"
#         And I click on Login button
#     Then I should be redirected to Logged Home page

# Examples:
# | email          | facebookEmail      | facebookPassword |
# | user@email.com | facebook@email.com | facebookPassword |