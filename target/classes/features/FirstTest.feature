
Feature: Login through cucumber by reading data in differnent way(properties file,examples,csv,datatable)
  
  Background:
  Given I am on Home Page
  And I click on Sign In Link
  
  # This will run by reading data from properties file
  Scenario: Login Functionalty with valid user
  And I enter Username
  And I enter Password
  And I hit Submit Button
  Then I should get logged In
  
  # This will run by reading data from below examples
  Scenario Outline: Login Functionalty with valid user
  And I enter username as "<Username>"
  And I enter password as "<Password>"
  And I hit Submit Button
  Then I should get logged In
  
  Examples:
  | Username |Password |
  | abc@gmail.com |1234 |
  | def@gmail.com |5678 |
  
  # This will run by reading data from csv files
  
  Scenario: Login Functionalty with valid user
  And I enter Username and Password from csv
  And I hit Submit Button
  Then I should get logged In
  
  
  # This will run by reading data from below data table
  Scenario: Login Functionalty with valid user
  And I enter Username and Password
  | ghi@gmail.com |4321 |
  And I hit Submit Button
  Then I should get logged In
 