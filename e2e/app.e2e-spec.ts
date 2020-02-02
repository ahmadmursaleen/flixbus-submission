import { browser, element, by, protractor } from "protractor";
import { flixBusPage } from "./app.po";
import { getCurrentUrl } from "./utils";
import { LoginPage } from "./login.po";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBcuGd_rP50iu-t4suYZL3ouzkahobBjtc",
  authDomain: "flixbus-5a7b4.firebaseapp.com",
  databaseURL: "https://flixbus-5a7b4.firebaseio.com",
  projectId: "flixbus-5a7b4",
  storageBucket: "flixbus-5a7b4.appspot.com",
  messagingSenderId: "124843802573",
  appId: "1:124843802573:web:bed9716daed1c08f3bce84"
};

describe("dashboard", () => {
  beforeEach(() => {
    browser.get("/#/login");
  });

  // Following are some integration test i.e. to check the flow of the application
  it("should have a login panel", async () => {
    let subject = await element(by.id("loginPanel")).isPresent();
    let result = true;
    expect(subject).toEqual(result);
  });

  it("should redirect to /login when trying to access the dashboard without being authenticated", async function() {
    const homePage = new flixBusPage();
    await homePage.navigateTo();
    const url = await getCurrentUrl();
    expect(url).toBe("http://localhost:4200/#/login");
  });

  it("should successfully login if provided the proper credentials", async function() {
    const loginPage = new LoginPage();

    await loginPage.navigateTo();
    await loginPage.login("user@flixbus.com", "user12345");

    const url = await getCurrentUrl();
    expect(url).toBe("http://localhost:4200/#/dashboard");
  });

  it("Dashboard should have a list of buses after successful login", async function() {
    const loginPage = new LoginPage();
    const home = new flixBusPage();
    await loginPage.navigateTo();
    await loginPage.login("user@flixbus.com", "user12345");
    home.navigateTo();
    let busList = await element(by.id("busList")).isPresent();
    let result = true;
    expect(busList).toEqual(result);
  });

  it("Dashboard should have a filter panel after successful login", async function() {
    const loginPage = new LoginPage();
    const home = new flixBusPage();
    await loginPage.navigateTo();
    await loginPage.login("user@flixbus.com", "user12345");
    home.navigateTo();
    let busList = await element(by.id("filterPanel")).isPresent();
    let result = true;
    expect(busList).toEqual(result);
  });
});
