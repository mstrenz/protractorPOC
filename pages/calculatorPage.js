//Example of a page object
var Calculator = function() {
    //Example of elements on page
    var firstNumber = element(by.css("input[ng-model='first']"));
    var secondNumber = element(by.css("input[ng-model='second']"));
    var goButton = element(by.id('gobutton'));
    //Example of element array
    var history = element.all(by.repeater('result in memory'));

    //Example of async function
    this.get = async function() {
        //Override default set in config
        browser.waitForAngularEnabled(true);
        await browser.driver.get("http://juliemr.github.io/protractor-demo/");
    };

    //Example of async function with parameters
    this.add = async function(a, b) {
        await firstNumber.sendKeys(a);
        await secondNumber.sendKeys(b);
        await goButton.click();
    };

    //Example of non-async function
    this.getHistoryCount = function() {
        return history.count();
    };

    this.getHistoryLast = function() {
        return history.last();
    };

    this.getHistoryFirst = function() {
        return history.first();
    };

};
module.exports = new Calculator();