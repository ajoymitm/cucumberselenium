$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstTest.feature");
formatter.feature({
  "line": 2,
  "name": "Login through cucumber by reading data in differnent way(properties file,examples,csv,datatable)",
  "description": "",
  "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable)",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_am_on_Home_Page()"
});
formatter.result({
  "duration": 11705083519,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_Sign_In_Link()"
});
formatter.result({
  "duration": 162386937,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "# This will run by reading data from properties file"
    }
  ],
  "line": 9,
  "name": "Login Functionalty with valid user",
  "description": "",
  "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I enter Username",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I hit Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should get logged In",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_enter_Username()"
});
formatter.result({
  "duration": 2283388035,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_Password()"
});
formatter.result({
  "duration": 303152906,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_hit_Submit_Button()"
});
formatter.result({
  "duration": 76508,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_get_logged_In()"
});
formatter.result({
  "duration": 8695785,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "# This will run by reading data from below examples"
    }
  ],
  "line": 16,
  "name": "Login Functionalty with valid user",
  "description": "",
  "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I enter username as \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I hit Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get logged In",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 23,
      "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user;;1"
    },
    {
      "cells": [
        "abc@gmail.com",
        "1234"
      ],
      "line": 24,
      "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user;;2"
    },
    {
      "cells": [
        "def@gmail.com",
        "5678"
      ],
      "line": 25,
      "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_am_on_Home_Page()"
});
formatter.result({
  "duration": 2559429437,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_Sign_In_Link()"
});
formatter.result({
  "duration": 2014180412,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login Functionalty with valid user",
  "description": "",
  "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I enter username as \"abc@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password as \"1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I hit Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get logged In",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 21
    }
  ],
  "location": "LoginTest.i_enter_username_as(String)"
});
formatter.result({
  "duration": 100294494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 21
    }
  ],
  "location": "LoginTest.i_enter_password_as(String)"
});
formatter.result({
  "duration": 74106684,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_hit_Submit_Button()"
});
formatter.result({
  "duration": 64068,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_get_logged_In()"
});
formatter.result({
  "duration": 8413389,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_am_on_Home_Page()"
});
formatter.result({
  "duration": 2174989915,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_Sign_In_Link()"
});
formatter.result({
  "duration": 1538884557,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login Functionalty with valid user",
  "description": "",
  "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I enter username as \"def@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password as \"5678\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I hit Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get logged In",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "def@gmail.com",
      "offset": 21
    }
  ],
  "location": "LoginTest.i_enter_username_as(String)"
});
formatter.result({
  "duration": 77643778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5678",
      "offset": 21
    }
  ],
  "location": "LoginTest.i_enter_password_as(String)"
});
formatter.result({
  "duration": 69087947,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_hit_Submit_Button()"
});
formatter.result({
  "duration": 71843,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_get_logged_In()"
});
formatter.result({
  "duration": 14874271,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_am_on_Home_Page()"
});
formatter.result({
  "duration": 2110517328,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_Sign_In_Link()"
});
formatter.result({
  "duration": 2216302668,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "# This will run by reading data from csv files"
    }
  ],
  "line": 29,
  "name": "Login Functionalty with valid user",
  "description": "",
  "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I enter Username and Password from csv",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I hit Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should get logged In",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_enter_Username_and_Password_from_csv()"
});
formatter.result({
  "duration": 309306200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_hit_Submit_Button()"
});
formatter.result({
  "duration": 46651,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_get_logged_In()"
});
formatter.result({
  "duration": 10097187,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_am_on_Home_Page()"
});
formatter.result({
  "duration": 1980891666,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_Sign_In_Link()"
});
formatter.result({
  "duration": 1746726562,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 35,
      "value": "# This will run by reading data from below data table"
    }
  ],
  "line": 36,
  "name": "Login Functionalty with valid user",
  "description": "",
  "id": "login-through-cucumber-by-reading-data-in-differnent-way(properties-file,examples,csv,datatable);login-functionalty-with-valid-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I enter Username and Password",
  "rows": [
    {
      "cells": [
        "ghi@gmail.com",
        "4321"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I hit Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should get logged In",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_enter_Username_and_Password(String,String\u003e)"
});
formatter.result({
  "duration": 178355334,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_hit_Submit_Button()"
});
formatter.result({
  "duration": 43230,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_get_logged_In()"
});
formatter.result({
  "duration": 8349011,
  "status": "passed"
});
});