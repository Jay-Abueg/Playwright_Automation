const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.submitButton = page.getByRole('button', { name: 'submit' });
    this.successMsg = page.locator('text=Congratulations');
    this.logOutButton = page.getByText('Log out');
    this.errorMessage = page.locator('id=error');
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async submit() {
    await this.submitButton.click();
  }

  async fillOutCredentials(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
  }

  async verifyLogIn() {
    await expect(this.page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
  }

  async verifySuccessMsg() {
    await expect(this.successMsg).toBeVisible();
  }

  async verifyLogOutButton() {
    await expect(this.logOutButton).toBeVisible();
  }

  async verifyErrorMsg() {
    await expect(this.errorMessage).toBeVisible();
  }

  async verifyErrorTxtMsg(InvalidCred) {
    await expect(this.errorMessage).toHaveText('Your ' + InvalidCred + ' is invalid!');
  }


};