package TestRunner;		

import org.junit.runner.RunWith;		
import cucumber.api.CucumberOptions;		
import cucumber.api.junit.Cucumber;		

@RunWith(Cucumber.class)				
@CucumberOptions(features="src/test/resources/features",glue={"StepDefinitions"},
dryRun = false,
strict = true,
monochrome = true,
plugin = {"pretty", "json:Reports/testreport.json","html:Reports", "rerun:Reports/rerun.txt"} ) 						
public class Runner 				
{		

}