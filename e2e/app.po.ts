import { browser, element, by } from "protractor";

export class flixBusPage {
  navigateTo() {
    return browser.get("/#/dashboard");
  }
}
