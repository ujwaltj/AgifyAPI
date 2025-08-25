Feature: Agify API Reference Testing

    Scenario: To predict age by entering name of a person
    Given I have a name "jane"
    When I request the age prediction from the API
    Then the response status should be 200
    And the response should contain an "age"

    Scenario: To verify client side error status code is being displayed
    if empty string is passed for the name parameter
    Given I have a name ""
    When I request the age prediction from the API
    Then the response status should be 422
    

    Scenario Outline: Agify API - Predict ages for names
    Given I have names "<name>"
    When I request age from the Agify API
    Then I should get an age prediction for name

    Examples: 
    |name|
    |michael|
    |matthew|
    |jane|