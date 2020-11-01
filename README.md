# Huawei Mobile Services Admin Node.js SDK

## Table of Contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [Contributing](#contributing)
-   [Documentation](#documentation)
-   [Supported Environments](#supported-environments)
-   [Acknowledgments](#acknowledgments)
-   [License](#license)

## Overview

[Huawei Mobile Service](https://developer.huawei.com)(HMS) provides the tools and infrastructure
you need to develop your app, grow your user base, and earn money. The HMS
Admin SDK for Node.js is writing in Typescript 🚀. Enables access to Huawei Mobile Services services from privileged environments
(such as servers or cloud) in Node.js or Typescript.

For more information, visit the
[Huawei Mobile Services Admin SDK setup guide](https://developer.huawei.com/consumer/en/doc/).

## Installation

The Huawei Mobile Services Admin Node.js SDK is available on npm as `hms-admin`:

```bash
$ npm i --save hms-admin
# or
$ yarn add hms-admin
```

To use the module in your application, `require` it from any JavaScript file:

```js
var admin = require('hms-admin');
```

If you are using ES2015, you can `import` the module instead:

```js
import * as admin from 'hms-admin';
```

## Contributing

Please refer to the [CONTRIBUTING page](./CONTRIBUTING.md) for more information
about how you can contribute to this project. We welcome bug reports, feature
requests, code review feedback, and also pull requests.

## Supported Environments

We support Node.js 12 and higher.

Please also note that the Admin SDK should only
be used in server-side/back-end environments controlled by the app developer.
This includes most server and serverless platforms (both on-premise and in
the cloud). It is not recommended to use the Admin SDK in client-side
environments.

## Documentation

This is like a Firebase Admin SDK for Node JS.
At the moment we do not have an official page in which you can see this documentation because this library is made by Herberth Obregón, a Huawei Dev fan.

As far as possible after my work I will document everything but in essence it is the same as firebase.

-   [Huawei Docs](https://developer.huawei.com)
-   [Firebase Authentication Guide](https://firebase.google.com/docs/auth/admin/)

## Acknowledgments

**This is not an official library.** The HMS had the shortcoming of not having an official Node.js library. I have decided to write it so that huawei services can be more transparently integrated into your android apps and its backend written in Typescript or Node JS

## License

Huawei Mobile Services Admin Node.js SDK is licensed under the
[The 3-Clause BSD License](https://opensource.org/licenses/BSD-3-Clause).

Your use of Huawei Mobile Services is governed by the
[Terms of Service for Huawei Mobile Services Services](https://developer.huawei.com/consumer/en/devservice/use).
