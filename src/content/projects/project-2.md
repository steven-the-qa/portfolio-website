---
title: 'app-slinger'
description: e2e mobile automation framework using WebdriverIO, Cucumber, TypeScript, and Appium.
publishDate: 'July 9 2023'
isFeatured: true
seo:
  image:
    src: '/project-2.png'
    alt: Snippet from the Azure Pipelines file where I start running the WebdriverIO tests and begin a script to manipulate user input into a runnable command
---

![Project preview](/project-2.png)

## Use WebdriverIO to test a cross-platform mobile app

### Introduction

Automate tests for your Android & iOS apps using WebdriverIO & TypeScript!

### Tech Stack

- WebdriverIO (Appium support)
- TypeScript (type safety)
- NodeJS (writing to the file system)
- Cucumber (supported out-of-the-box via WebdriverIO's CLI)
- BrowserStack (devices)

## Getting Started

First, make sure you have Node 16 installed on your computer. I use Node 16.15.1.

First, make sure to [clone the repo](https://github.com/steven-the-qa/app-slinger). Then, within the `ios` and `android` directories, run `npm install` to install dependencies.

That's it! At this point, you should be able to run tests.

## Run Tests Locally

### Running all tests for either Android or iOS

1. Navigate to the directory of either the `android` or `ios` project
2. Run `npm run all` to run all tests in the project

### Running a single test

1. Navigate to the directory of either the `android` or `ios` project
2. Run `npm run test features/{name}.feature` using the name of your feature file

### Running multiple tests

1. Navigate to the directory of either the `android` or `ios` project
2. Run `npm run test {feature_path_1} {feature_path_2} etc...`

### Run on 1 or more devices

1. Navigate to the directory of either the `android` or `ios` project
2. DEVICE={device_name1} {device_name2} npm run test {feature_path}

iOS Devices:

- iphone_12_pro_16
- iphone_13_pro_15

Android Devices:

- pixel_6_12
- galaxy_s21_12
