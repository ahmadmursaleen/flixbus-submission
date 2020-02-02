import { browser, by, element } from "protractor";

export class LoginPage {
  get username() {
    return element(by.id("userEmail"));
  }
  get password() {
    return element(by.id("userPassword"));
  }
  get submit() {
    return element(by.id("loginButton"));
  }
  navigateTo() {
    return browser.get("/#/login");
  }

  async login(username: string, password: string): Promise<void> {
    await Promise.all([
      this.username.sendKeys(username),
      this.password.sendKeys(password)
    ]);
    await this.submit.click();
  }
}
