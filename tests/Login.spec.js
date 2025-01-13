// @ts-check
const { test } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/loginPage');

test('Login and verify success page', async ({ page }) => {
  const loginPage = new LoginPage(page);  
  // Open page
  await loginPage.goto();

  // Type username into Username field and Type password into Password field
  await loginPage.fillOutCredentials('student','Password123');

  // Push Submit button
  await loginPage.submit();

  // Verify new page URL contains practicetestautomation.com/logged-in-successfully/
  await loginPage.verifyLogIn();

  // Verify new page contains expected text ('Congratulations' or 'successfully logged in')
  await loginPage.verifySuccessMsg();

  // Verify button Log out is displayed on the new page
  await loginPage.verifyLogOutButton();

});

test('Verify login error message with invalid Username', async ({ page }) => {
  const loginPage = new LoginPage(page); 
  // Open the page
  await loginPage.goto();

  // Type Incorrect username into Username field and Type password into Password field
  await loginPage.fillOutCredentials('IncorrectUser','Password123');

  // Push Submit button
  await loginPage.submit();

  // Verify error message is displayed
  await loginPage.verifyErrorMsg()

  // Verify error message text is "Your username is invalid!" if invalid cred is 'username'
  await loginPage.verifyErrorTxtMsg('username');
});

test('Verify login error message with invalid Password', async ({ page }) => {
  const loginPage = new LoginPage(page); 
  // Open the page
  await loginPage.goto();

  // Type username into Username field and Type Incorrect password into Password field
  await loginPage.fillOutCredentials('student','IncorrectPassword');

  // Push the Submit button
  await loginPage.submit();

  // Verify error message is displayed
  await loginPage.verifyErrorMsg()

  // Verify error message text is "Your password is invalid!" if invalid cred is 'password'
  await loginPage.verifyErrorTxtMsg('password');
});
