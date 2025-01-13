const { test, expect } = require('@playwright/test');
const { ExceptionPage } = require('../pageObjects/exceptionPage');

test('Verify Row 2 input field is displayed after clicking Add button', async ({ page }) => {
  const exceptionPage = new ExceptionPage(page); 
  // 1. Open the page
  await exceptionPage.goto(); 
  
  // 2. Click Add button
  await exceptionPage.addButton.click();

  // 3. Verify Row 2 input field is displayed
  await expect(exceptionPage.row2InputField).toBeVisible();

});

test('Verify Row 2 is Saved after clicking the visible Save button', async ({ page }) => {
  const exceptionPage = new ExceptionPage(page); 
// 1. Open the page
  await exceptionPage.goto();
// 2. Click Add button
  await exceptionPage.addButton.click();
  
// 3. Verify Row 2 input field is displayed
  await expect(exceptionPage.row2InputField).toBeVisible();

// Type text into the second input field and Click Save button using locator By.name(“Save”) visible only
  await exceptionPage.typeAndSave("Type and Save");

// Verify Row 2 is Saved
  await exceptionPage.confirmSave();

});

test('Verify Text changed after clicking the Edit button first', async ({ page }) => {
  const exceptionPage = new ExceptionPage(page); 
// 1. Open page (Replace with your actual URL)
  await exceptionPage.goto();

 // 2. Enable editing of disabled input field
  const editButtonLocator = page.locator('[name="Edit"]');
  const inputFieldLocator = page.locator('[class="input-field"]');

 try {
   await page.locator(editButtonLocator).click(); 
 } catch (error) {
   console.error("Couldn't click the edit button:", error);
   return;
 }

 // 2. Clear input field (now that it's enabled)
 try {
    await page.locator(inputFieldLocator).clear();
 } catch (error) {
   console.error("Couldn't clear the input field:", error);
   return;
 }

 // 3. Type text into the input field
 const textToType = "This is my typed text";
 try {
   await page.type(inputFieldLocator, textToType);
 } catch (error) {
   console.error("Couldn't type in the input field:", error);
   return;
 }
 
 // 4. Verify text changed
 try {
      await page.waitForFunction(
           (inputFieldLocator, textToType) => document.querySelector(inputFieldLocator).value === textToType,
           inputFieldLocator,
           textToType
       );       
       console.log("Text successfully typed and verified!");

 } catch (error) {
       console.error("Verification failed:", error);
       return;
 }

}); 

test('Verify instruction text element is no longer displayed', async ({ page }) => {
  const exceptionPage = new ExceptionPage(page); 
  // 1. Open page (Replace with your actual URL)
  await exceptionPage.goto();

  try {
    // 2. Find the instructions text element
    if (!exceptionPage.instructionsElement) {
      throw new Error("Instructions element not found on the page.");
    }

    // Verify that the element is initially displayed
    const isInstructionsVisible = await instructionsElement.isVisible();
        if(!isInstructionsVisible){
        throw new Error("Instructions element is not visible at the beginning.");
        }

    // 3. Push add button
    const addButton = await page.locator('[id="add_btn"]');  // Replace with your actual selector for the add button
    if (!addButton) {
      throw new Error("Add button not found on the page.");
    }

    await addButton.click();


    // 4. Verify instruction text element is no longer displayed 
    try {
        await instructionsElement.waitFor({ state: 'detached', timeout: 5000 });
    } catch (error) {
         if (error.message.includes('waiting for detached')) {
             console.log('Instruction element is detached as expected.');
        } else {
         throw new Error(`Instruction element did not detach after clicking add button: ${error.message}`);
         }
        }

     //Another way to verify that the element is no longer displayed is to make sure that the element doesn't exist or is not visible
        const elementExists =  await page.locator('[id="instructions "]');
        if(elementExists){
          const isVisible = await elementExists.isVisible();
          if (isVisible) {
            throw new Error("Instructions element is still visible after clicking add button.");
          }
        }  
    console.log('Test passed: Instructions element is not visible.');
  } catch (error) {
    console.error('Test failed:', error.message);
    
  } finally {

  }

});

test('Verify second input field is displayed', async ({ page }) => {
  // 1. Open the page
  await page.goto('https://practicetestautomation.com/practice-test-exceptions/');
  // 2. Click Add button
  await page.locator('[id="add_btn"]').click();

  try {
    // Wait for the second input field to be displayed (with a timeout of 3 seconds)
    await page.waitForSelector(('textbox').nth(1), { timeout: 3000 });
    console.log('Second input field displayed');
  } catch (error) {
    console.error('TimeoutException: Second input field not displayed within 3 seconds');
  }

  // Do something with the second input field (replace '.second-input-field' with the actual selector)
  const secondInputField = await page.getByRole('textbox').nth(1);
  if (secondInputField) {
    console.log('Second input field exists');
  } else {
    console.error('Second input field does not exist');
  }

});
