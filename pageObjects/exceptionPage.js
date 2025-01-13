const { expect } = require('@playwright/test');

exports.ExceptionPage = class ExceptionPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addButton = page.locator('[id="add_btn"]');
    this.row2InputField = page.locator('[class="input-field"]');
    this.confirmMsg = page.locator('[id="confirmation"]');
    this.editButtonLocator = page.locator('[name="Edit"]');
    this.inputFieldLocator = page.locator('[class="input-field"]');
    this.instructionsElement = page.locator('[id="instructions "]')

  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-exceptions/');
  }

  async typeAndSave(text){
    await this.page.getByRole('textbox').nth(1).fill(text);
    await this.page.locator('[name="Save"] >> visible=true').click();
  }

  async confirmSave(){
    await expect(this.confirmMsg).toBeVisible();
    await expect(this.confirmMsg).toHaveText('Row 2 was saved ')
  }

};