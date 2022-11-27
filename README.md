<br/>
<h1 align="center">
  Teensy Tiny UUID v4 Generator
</h1>
<p align="middle">
  An RFC 4122 compliant UUID v4 generator compatible with browser and Node APIs.
  </p>
<br/>
<p align="center">
  <a href="https://github.com/tbusillo/teensy-typescript-package/actions/workflows"><img src="https://github.com/tbusillo/teensy-typescript-package/actions/workflows/test.yml/badge.svg" alt="CI status"></a>
</p>
<br/>

## Features

- 3.5kb
- RFC 4122 compliant UUID v4
- Uses `crypto.webcrypto` for generating random numbers used to seed UUID
- Use of `.webcrypto` makes this package usable in Node as well as the browser

## Installation

Using the Github UI, [create a new repository](https://github.com/tbusillo/teensy-typescript-package/generate) based on this template.

You can also clone it using the below:

```bash
git clone git@github.com:tbusillo/teensy-typescript-package.git

# install the dependencies
pnpm install && pnpm build && pnpm dev
```

## Getting Started

```bash
# clone the template via Github.com or...
git clone git@github.com:tbusillo/teensy-typescript-package.git

# OR, go to

# install dependencies
pnpm install

# stub /dist - great for use with playgrounds/monorepos
pnpm dev # pnpm stub --dev

# Run tests
pnpm test

# Lint / format
pnpm lint

# Run with nodemon (reload on file change) and transpile with TSC
pnpm start

# Build package
pnpm build

# Clean /dist cache
pnpm clean

# Install git hooks
pnpm prepare
# Install git hooks
pnpm prepare
```

## Releasing

If you intend to distribute your package via a manager (e.g., `npm`, `yarn`, etc), this template
includes [standard-version](https://github.com/conventional-changelog/standard-version).

To run a release, update the included `./.npmrc` with the URL of the

## License

## Releasing

If you intend to distribute your package via a manager (e.g., `npm`, `yarn`, etc), this template
includes [standard-version](https://github.com/conventional-changelog/standard-version).

To run a release, update the included `./.npmrc` with the URL of the

## License

MIT License

Copyright (c) 2022 Tom
