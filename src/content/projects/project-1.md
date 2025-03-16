---
title: 'web-automation-template'
description: Web test automation framework using Playwright + TypeScript
publishDate: 'February 24, 2024'
isFeatured: false
seo:
  image:
    src: '/project-1.png'
    alt: First test block in the web-automation-template project where I test finding the T Swift album by product name and view details page
---

![Project preview](/project-1.png)

# Use Playwright to find a Taylor Swift album on Amazon

---

## GitHub Repo

<a href="https://github.com/steven-the-qa/web-automation-template" target="_blank" rel='noopener noreferrer'>
   https://github.com/steven-the-qa/web-automation-template
</a>

## CI/CD

You can use the manual "Run Workflow" button in the "Actions" tab of the repo to run the tests from GitHub if you don't want to download the project.

Otherwise, continue to the instructions for running my solution on your machine.

## Installation

1. Clone this repository to your local machine using Git:

```bash
git clone https://github.com/steven-the-qa/web-automation-template.git
```

2. Navigate to the project directory:

```bash
cd web-automation-template
```

3. Install the project dependencies:

```bash
npm install
```

## Running the Tests

You can run my solution using `npm test` on the **Actions** tab of the [GitHub repo](https://github.com/steven-the-qa/web-automation-template/actions/workflows/playwright.yml).

## Cool Features

1. Page Object Model

   I'm doing this my own way. Playwright doesn't describe my approach in their docs, but I think mine is easier to understand.

   I was inspired by the way my mentor at Fetch designed the page objects in his Ruby/Appium framework. I loved his concept of "Sections" as a way to group locators for a section of the page, and "Elements" and "Messages" to declare the UI elements and the text contents within them.

   The "Section" is mostly helpful for modeling UI components, but I'm demoing it here for fun.

   ***

   [This](https://playwright.dev/docs/pom) is how Playwright recommends doing it.

   They prefer to throw all their locators into the constructor, for some reason.

   Other frameworks like WebdriverIO [don't seem to follow this convention](https://webdriver.io/docs/pageobjects/).

2. HTML Report

   This is an artifact I'm publishing in the GitHub Actions workflow after the tests finish.

3. Screenshots

   I'm taking a screenshot after each test and publishing it as an artifact after the tests finish.

   The screenshot files are named after the name of the test after which they were taken.

4. Manual & Automatic CI Trigger

   The tests will automatically run when you push new code to the repo.

   You can also use the manual trigger to run the tests without ever leaving GitHub.

5. Mobile & Desktop Viewport Sizes

   There is an environment variable named VIEWPORT_SIZE you can set when you run the tests on your local machine, like so:

   ```bash
   VIEWPORT_SIZE=min npm test
   ```

   The default is the Macbook Air viewport size (`max`). You can set it to `min` if you want to run on the iPhone 12 viewport size.

6. Fixtures

   Fixtures add a separation of concerns to tidy up the test files. Basically, anything that goes in a `before` or `after` hook can be moved to a fixture.

   All setup and teardown is taken out of the test files and put into fixtures. This means you can write setup/teardown in 1 place and reuse it in any test file.

   Read more about fixtures [here](https://playwright.dev/docs/test-fixtures#creating-a-fixture).
