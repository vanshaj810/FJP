const puppeteer = require('puppeteer');
let email = "cejowi8313@eosbuzz.com";
let password = "123456";
let BrowserPromise = puppeteer.launch({ headless: false });
let page;
BrowserPromise.then(function (browser) {
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function (pageInstance) {
    console.log("Page is opened");
    page = pageInstance;
    let urlPromise = page.goto("https://www.hackerrank.com/");
    return urlPromise;

}).then(function () {
    console.log("HackerRank page is opened");
    let waitPromise = page.waitForSelector("ul.menu a");
    return waitPromise;
}).then(function () {
    let clickpromise = page.click("ul.menu a");
    return clickpromise;
}).then(function () {
    let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    return waitPromise;
}).then(function () {
    let domclickPromise = page.evaluate(function () {
        let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btns[1].click();
        return;
    })
    return domclickPromise;
}).then(function () {
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function () {
    let mailTypedPromise = page.type("#input-1", email, { delay: 100 });
    return mailTypedPromise;
}).then(function () {
    let passTypedPromise = page.type("#input-2", password, { delay: 100 });
    return passTypedPromise;
}).then(function () {
    let clickpromise = page.click('button[data-analytics="LoginPassword"]');
    return clickpromise;
}).then(function () {
    console.log("Login is successfull");
    let waitPromise = page.waitForSelector('[data-automation="algorithms"]');
    return waitPromise;
}).then(function () {
    let clickPromise = page.click('[data-automation="algorithms"]');
    return clickPromise;
}).then(function () {
    return page.waitForSelector(".filter-group");
}).then(function () {
    let domSelectPromise = page.evaluate(function () {
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function () {
    console.log("warmup Selected");
    return page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
}).then(function () {

})