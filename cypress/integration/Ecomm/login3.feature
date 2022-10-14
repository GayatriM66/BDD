Feature: Validate the Practice Automation Site for login functionality

    Scenario: Login with Valid Credentials
        Given Visit Practice Automation site for login
        When Enter the Username and Password
            | Username           | Password     |
            | gayatri1@gmail.com | gayatri1234& |
        Then Click on Submit button
        And Validate the Dashborad Text

    @focus
    Scenario Outline: Login with Valid Credentials with multiple users
        Given Visit Practice Automation site for login
        When Enter the "<Username>" and "<Password>"
        Then Click on Submit button
        And Validate the Dashborad Text

        Examples:
            | Username           | Password     |
            | gayatri1@gmail.com | gayatri1234& |
            | sarika@test.com    | @Minskole12  |
            | gauri@test.com     | 12Minskole@  |