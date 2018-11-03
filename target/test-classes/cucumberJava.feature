Feature: Test amazon webpage
Scenario: User search Nikon cameras from https://www.amazon.com/

Given User has open the browser to https://www.amazon.com
When User writes Nikon to search bar
Then User sees Nikon cameras
When User sorts results from highest price to lowest
And Selects item number 2
Then Item should contain text Nikon Nikon D3X