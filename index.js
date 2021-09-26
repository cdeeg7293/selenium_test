const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");
var should = require("chai").should();

async function example() {
    //launch the browser
let driver = await new Builder().forBrowser("chrome").build();
    //navigate to web app
await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //functionality
await driver.findElement(By.id("sampletodotext")).sendKeys("Selenium", Key.RETURN);

//assert
let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value) {
    return value;
//return the value and store it within var
});

// assert.strictEqual(todoText,"Selenium");

//assert using chai should()
todoText.should.equal("Selenium");
    //close the browser
    await driver.quit();
};

example();