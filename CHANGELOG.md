# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2020-09-14)


### Features

* add a ping endpoint and make the healthchecker use that ([a9e523e](https://github.com/GitHug/roster-converter/commit/a9e523ebe9967aaac3527b22881fc719b144e89e))
* add healthcheck to be used by Dockerfile ([73018ae](https://github.com/GitHug/roster-converter/commit/73018ae523bdb9f7b5c582f42f7846d97506e40f))
* add timestamp to log messages ([1d0c62c](https://github.com/GitHug/roster-converter/commit/1d0c62cd72ab58dc6faa15454ec30c45d4d9811f))
* **app.ts:** create /conversion endpoint for converting a roster file ([565730c](https://github.com/GitHug/roster-converter/commit/565730cf0a6967b24b6231915f35a1234e430601))
* **logger.ts:** create a logger for uniform log messages ([564d8f9](https://github.com/GitHug/roster-converter/commit/564d8f93c00daebfccfda98eb501ef09ef846c96))
* **schema.ts:** add schema for validating request ([590d576](https://github.com/GitHug/roster-converter/commit/590d576196e461c9ed41636a70f5ec756c721095))
* **server.ts:** add server to handle incoming requests ([8c8adf3](https://github.com/GitHug/roster-converter/commit/8c8adf3d6e17e4061e0518605c624345894090bd))


### Code Refactoring

* move healthchecker to top level in src ([42030b8](https://github.com/GitHug/roster-converter/commit/42030b8f627625f814d73b3fc7681a1163145a41))
* remove old index file ([234c9c2](https://github.com/GitHug/roster-converter/commit/234c9c296250f81285228e017d705b3ac4b21b1b))


### Build System

* reduce healthcheck interval time ([2a25e58](https://github.com/GitHug/roster-converter/commit/2a25e58e2ffe946ebf0065eedf6f707bf997b02a))
* **dockerfile:** add Dockerfile and .dockerignore ([928aff5](https://github.com/GitHug/roster-converter/commit/928aff5810faaa608629ef68c7f1a3e0a568179b))


### CI

* add travis config ([30959ab](https://github.com/GitHug/roster-converter/commit/30959ab1074970ce00f0cb24b6c73d78a38149a5))


### Others

* add additional dependencies ([fd9b005](https://github.com/GitHug/roster-converter/commit/fd9b005fdf54a68834f857f8755f95dc679874b5))
* add release script ([7147d39](https://github.com/GitHug/roster-converter/commit/7147d39fd4a531cfc00df8105d77431c408606f6))
* add setup file for Jest to set environment variable before every test ([7211cb3](https://github.com/GitHug/roster-converter/commit/7211cb3102aef203676fa388811e138becd0434b))
* add supertest ([b6d283b](https://github.com/GitHug/roster-converter/commit/b6d283b1fc72a9e19a715a80fb1714dcce122b2a))
* add travis and codecov badges to README ([39d87e5](https://github.com/GitHug/roster-converter/commit/39d87e5a29532e321623ba53248174fb794563f3))
* exclude all __tests__ folders ([9756368](https://github.com/GitHug/roster-converter/commit/9756368a4e0c0357fd7045b128cbeab60396debb))
* initial commit ([cd5bd4f](https://github.com/GitHug/roster-converter/commit/cd5bd4fd71134a4a709b81607e3efa48be76ea63))
* rename healtchecker ([037a241](https://github.com/GitHug/roster-converter/commit/037a2419b99bf35b9d6690648a2c7ae246c9d569))
* update README ([7785866](https://github.com/GitHug/roster-converter/commit/77858661b92d90bd19de229571d840ac764aa96d))
* **jest.config.js:** add jest config ([6c8dafa](https://github.com/GitHug/roster-converter/commit/6c8dafa3cf66a010f841ee0667aa5d373466b018))
* **package.json:** add build script ([3103423](https://github.com/GitHug/roster-converter/commit/3103423ddc1dcdbee5d38cf1bc234b7ab4c2b112))
* **package.json:** add rosz2js dependency ([5f0a944](https://github.com/GitHug/roster-converter/commit/5f0a944f027057b8369a40e471be77adf01efcdd))
* **readme.md:** update the README ([b6f00f6](https://github.com/GitHug/roster-converter/commit/b6f00f6c6b3cfc7f15f3cc69c98230639037dc48))
* update tsconfig to include src directory ([3422a4d](https://github.com/GitHug/roster-converter/commit/3422a4d8d41a9df549828557c9397769f472da5a))
* **tsconfig.json:** exclude node_modules and dist ([f2afcd6](https://github.com/GitHug/roster-converter/commit/f2afcd69626af9b57b7afe3944f8ce3fd23414d7))
