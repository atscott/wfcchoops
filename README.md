[![codecov]
(https://codecov.io/gh/atscott/wfcchoops/branch/master/graph/badge.svg)]
(https://codecov.io/gh/atscott/wfcchoops)

[![CircleCI](https://circleci.com/gh/atscott/wfcchoops.svg?style=svg)]
(https://circleci.com/gh/atscott/wfcchoops)


### Quick start

```bash
# clone the repo
$ git clone https://github.com/atscott/wfcchoops.git

# change directory to your app
$ cd wfcchoops

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
go to [http://localhost:3000](http://localhost:3000) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Developing](#developing)
    * [Testing](#testing)
    * [Production](#production)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v5.x.x`+) and NPM (`3.x.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Developing

After you have installed all dependencies you can now start developing with:

* `npm start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:8080`.

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

#### 2. End-to-End Tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!

## Code Format

This project uses clang-format with the Google style option for .ts and .js files.

`npm install -g clang-format`

# Project TODOs

  * [ ] Remove unused webpack starter code
  * [ ] Get integration tests working
  * [ ] Add tests for the layout directive
  * [ ] Separate the app.component.ts into smaller components
  * [ ] Format all js/ts files with clang-format
  * [ ] Find a good formatter for html files
  * [ ] Remove unused images and docs from assets
