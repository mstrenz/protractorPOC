var Calculator = function() {
    var firstNumber = element(by.css("input[ng-model='first']"));
    var secondNumber = element(by.css("input[ng-model='second']"));
    var goButton = element(by.id('gobutton'));
    var history = element.all(by.repeater('result in memory'));

    this.get = async function() {
        browser.waitForAngularEnabled(true);
        await browser.driver.get("http://juliemr.github.io/protractor-demo/");
    };

    this.add = async function(a, b) {
        await firstNumber.sendKeys(a);
        await secondNumber.sendKeys(b);
        await goButton.click();
    };

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