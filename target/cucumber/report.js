$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumberJava.feature");
formatter.feature({
  "line": 1,
  "name": "Test amazon webpage",
  "description": "",
  "id": "test-amazon-webpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5311095046,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "User search Nikon cameras from https://www.amazon.com/",
  "description": "",
  "id": "test-amazon-webpage;user-search-nikon-cameras-from-https://www.amazon.com/",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User has open the browser to https://www.amazon.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User writes Nikon to search bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User sees Nikon cameras",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User sorts results from highest price to lowest",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Selects item number 2",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Item should contain text Nikon Nikon D3X",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 29
    }
  ],
  "location": "cucumberJava.open_url(String)"
});
formatter.result({
  "duration": 6922160751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikon",
      "offset": 12
    }
  ],
  "location": "cucumberJava.searchNikon(String)"
});
formatter.result({
  "duration": 10191416063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikon",
      "offset": 10
    }
  ],
  "location": "cucumberJava.checkItemAvailability(String)"
});
formatter.result({
  "duration": 2362092138,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.sortResultsFromHighesttolowest()"
});
formatter.result({
  "duration": 807814497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "cucumberJava.selectItemNbr(int)"
});
formatter.result({
  "duration": 5307554256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikon Nikon D3X",
      "offset": 25
    }
  ],
  "location": "cucumberJava.checkTheItemName(String)"
});
formatter.result({
  "duration": 1406878,
  "error_message": "java.lang.AssertionError\r\n\tat amazonTestFiles.cucumberJava.checkTheItemName(cucumberJava.java:67)\r\n\tat ✽.Then Item should contain text Nikon Nikon D3X(cucumberJava.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 247937388,
  "status": "passed"
});
});