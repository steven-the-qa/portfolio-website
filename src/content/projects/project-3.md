---
title: 'electron-automation-template'
description: Electron app test automation using Playwright, TypeScript, NodeJS, and a sprinkle of RobotJS
publishDate: 'July 15 2023'
isFeatured: false
seo:
  image:
    src: '/project-3.png'
    alt: 'Playwright code for launching the Notion app'
---

![Project preview](/project-3.png)

# Use Playwright to test the Notion native app

## Introduction

Automate tests for your Electron apps using Playwright & TypeScript!

## GitHub Repo

<a href="https://github.com/steven-the-qa/electron-automation-template" target="_blank" rel='noopener noreferrer'>
    https://github.com/steven-the-qa/electron-automation-template
</a>

## Tech Stack

- Playwright (ElectronJS app testing support)
- TypeScript (type safety)
- NodeJS (writing to the file system)
- RobotJS (Playwright doesn't do keyboard navigation well within a select menu)

## Getting Started

1. Clone the repository
2. IF ON WINDOWS (maybe just Windows 10, idk), install an extra dependency to support RobotJS keyboard commands BEFORE installing all dependencies (otherwise, [things get weird](https://github.com/octalmage/robotjs/issues/590)):

```bash
npm install -g node-gyp
```

3. Install the Visual Studio Tools [with the "Desktop Development with C++" workload](<https://github.com/nodejs/node-gyp#installation:~:text=Install%20Visual%20C%2B%2B%20Build%20Environment%3A%20Visual%20Studio%20Build%20Tools%20(using%20%22Visual%20C%2B%2B%20build%20tools%22%20workload)%20or%20Visual%20Studio%20Community%20(using%20the%20%22Desktop%20development%20with%20C%2B%2B%22%20workload)>) to support node-gyp
4. To install all dependencies minus unnecessary Playwright browsers (because Electron), run:

```bash
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci
```

4. To run tests, run `npm test` from the root directory
