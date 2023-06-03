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

- 3.5kb minified, with no dependencies
- RFC 4122 compliant UUID v4
- Isomorphic - it works in the browser as well as with Node.js, without use of browserify, a bundler, or other dependencies

## Installation

```bash
npm install @teensy/uuid

yarn add @teensy/uuid

pnpm add @teensy/uuid
```

## Usage

```typescript
import uuid from '@teensy/uuid';

const id = uuid();
```

## Releasing

If you intend to distribute your package via a manager (e.g., `npm`, `yarn`, etc), this template
includes [standard-version](https://github.com/conventional-changelog/standard-version).

To run a release, update the included `./.npmrc` with the URL of the


## Releasing

To release a new version, run the following command:
```bash

pnpm run release

```

Canary versions are released automatically on every push to `main` via CI. To use a canary version in your project, use `@teensy/uuid@canary`.

## License

MIT License

Copyright (c) 2022 Tom
