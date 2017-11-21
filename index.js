const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;
const config = require("./config");

let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build();

// checkinStormSS();
// driver.sleep(5000);
config.sites.forEach(site => {
    if (!site.disabled)
        checkin(site)
    driver.sleep(5000);
});

driver.quit();

function checkin(site) {
    driver.get(site.loginUrl);
    driver.wait(until.elementLocated(By.id("login")), 10000);
    driver.findElement(By.id("email")).sendKeys(site.username);
    driver.findElement(By.id("passwd")).sendKeys(site.password);
    driver.findElement(By.id("login")).click();
    driver.wait(until.titleIs(site.title), 10000);

    let checkinButton = driver.findElement(By.id("checkin"));
    checkinButton.getText()
        .then(text => {
            if (text == "点击签到")
                checkinButton.click();
        })
}