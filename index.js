const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;
const config = require("./config");

let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build();
driver.get("https://stormss.top/auth/login");
driver.wait(until.elementLocated(By.id("login")), 10000);
driver.findElement(By.id("email")).sendKeys(config.username);
driver.findElement(By.id("passwd")).sendKeys(config.password);
driver.findElement(By.id("login")).click();
driver.wait(until.titleIs("风暴SS"), 10000);
driver.findElement(By.id("checkin")).click();
driver.sleep(5000);

driver.quit();