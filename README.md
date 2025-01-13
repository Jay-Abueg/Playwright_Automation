# Playwright_Automation

This guide will walk you through the process of setting up Playwright for browser automation and end-to-end testing using JavaScript within Visual Studio Code.

## Prerequisites

Before you begin, make sure you have the following installed:

*   **Node.js:**  Playwright requires Node.js. Download and install it from [https://nodejs.org/](https://nodejs.org/). It's recommended to use an LTS (Long-Term Support) version.
*   **Visual Studio Code (VS Code):** If you don't have it already, download and install VS Code from [https://code.visualstudio.com/](https://code.visualstudio.com/).

## Step-by-Step Installation and Setup

1.  **Create a New Project Directory:**

    Open your terminal or command prompt and navigate to the location where you want to create your project. Then, create a new directory and navigate into it:

    ```bash
    mkdir playwright-js-demo
    cd playwright-js-demo
    ```

2.  **Initialize a Node.js Project:**

    Inside your project directory, initialize a new Node.js project:

    ```bash
    npm init -y
    ```
    This will create a `package.json` file with default configurations.

3.  **Install Playwright:**

    Now, install the Playwright library as a development dependency:

    ```bash
    npm install playwright --save-dev
    ```

4.  **Install Playwright Browsers (Optional but Recommended):**

    By default, Playwright doesn’t download the browsers. You can install them in one go or individually as needed.

        *  **Install all browsers:**

        ```bash
        npx playwright install
        ```
    
        *   **Install specific browsers:**

        ```bash
        npx playwright install chromium
        npx playwright install firefox
        npx playwright install webkit
        ```