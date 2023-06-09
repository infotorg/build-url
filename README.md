# build-url

Build an URL by joining provided parts and removing trailing slash

## [API documentation](https://infotorg.github.io/build-url/)

## Installation

```bash
npm install @infotorg/build-url
```

## Usage

As a parameter(s) an array with url parts or just strings can be provided.

```javascript
import { buildUrl } from '@infotorg/build-url';

// How url is fixed
const normalizedUrl = buildUrl('https://example.com/');

console.log(normalizedUrl);
// https://example.com

// How url is built from two strings
const normalizedUrl = buildUrl('https://example.com', 'chunk');

console.log(normalizedUrl);
// https://example.com/chunk

// How url is built by joining an array's indexes
const normalizedUrl = buildUrl(['https://example.com', 'chunk']);

console.log(normalizedUrl);
// https://example.com/chunk
```

## Tests

Tests are written with `jest`. They can be run with `npm`:

```shell
npm run test
```

##### LICENSE: MIT

##### AUTHOR: [Lukasz Sitnik](https://github.com/JeraldStarr)
