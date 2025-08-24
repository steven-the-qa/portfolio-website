---
title: 'playwright-ci-and-slack-reporter'
description: 'Playwright CI workflows for e2e and API tests, with a Slack reporter to report test failures'
publishDate: 'June 2, 2025'
isFeatured: true
seo:
  image:
    src: '/project-4.png'
    alt: ''
---

![Project preview](/project-4.png)

# Playwright CI and Slack Reporter

A robust CI/CD solution for running Playwright tests with real-time Slack notifications for test failures.

## Workflows

### E2E (UI) Tests

- Runs on Chrome and Safari browsers
- Implements test sharding (2 shards per browser) for parallel execution
- Configurable retry strategy:
  - Chrome: 2 retries
  - Safari: 4 retries (more retries due to browser stability)
- Test results are uploaded as artifacts with 15-day retention
- Timeout: 45 minutes

### API Tests

- Dedicated workflow for API testing
- Uses Redis for state management
- Configurable retry strategy (default: 2 retries)
- Test results are uploaded as artifacts with 15-day retention
- Timeout: 30 minutes

### Slack Reporter

- Real-time test failure notifications in Slack
- Features:
  - Individual test failure reporting
  - Aggregated failure summaries
  - GitHub-Slack user mapping for @mentions
  - Detailed stack traces
  - Direct links to GitHub Actions runs
  - Browser and shard context in messages

## Technical Stack

### Core Technologies

- Playwright for E2E and API testing
- GitHub Actions for CI/CD
- Redis for state management
- Slack Web API for notifications

### Key Dependencies

- @playwright/test: ^1.52.0
- @slack/web-api: ^7.9.2
- ioredis for Redis operations

## Design Decisions & Benefits

### Test Sharding

- **Why**: Parallel test execution reduces total run time
- **Benefits**:
  - Faster feedback loop
  - Better resource utilization
  - Scalable test suite

### Browser-Specific Retry Strategy

- **Why**: Different browsers have varying stability characteristics
- **Benefits**:
  - Reduced false positives
  - Better handling of browser-specific issues
  - Optimized CI runtime

### Redis State Management

- **Why**: Need for distributed state tracking across shards
- **Benefits**:
  - Reliable state synchronization
  - Atomic operations for concurrent updates
  - Efficient failure aggregation

### Slack Integration

- **Why**: Real-time visibility into test failures
- **Benefits**:
  - Immediate team notification
  - Detailed failure context
  - Easy access to test runs
  - User-specific mentions for accountability

### Failure Aggregation

- **Why**: Prevent notification spam for multiple failures
- **Benefits**:
  - Cleaner Slack channel
  - Better failure overview
  - Easier debugging prioritization

## Setup

1. Configure Slack Bot Token in GitHub Secrets
2. Set up Redis service in GitHub Actions
3. Map GitHub usernames to Slack user IDs in `github-slack-user-map.json`
4. Configure test projects in Playwright config

## Usage

The workflows are designed to be called by other GitHub Actions workflows. Example:

```yaml
jobs:
  test:
    uses: ./.github/workflows/playwright-ui-tests.yml
  api:
    uses: ./.github/workflows/playwright-api-tests.yml
```
