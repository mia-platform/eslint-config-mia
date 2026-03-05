<div align="center">

# eslint-config-mia

[![Build Status][travis-svg]][travis-org]
[![javascript style guide][standard-mia-svg]][standard-mia]
[![NPM version][npmjs-svg]][npmjs-com]

</div>

**The ESLint [Shareable Config][share-config] for Mia-Platform JavaScript Style**

## Getting Started



### Requirements

- Node.js 18+

### Install

You can easily install the package with npm:

```sh
npm install --save-dev @mia-platform/eslint-config-mia eslint@^9.0.0
```

The package require [`eslint`](https://github.com/eslint/eslint) to work, to list the correct version you can run:

```sh
npm info "@mia-platform/eslint-config-mia@latest" peerDependencies
```

To be sure to install a compatible `eslint-config-mia` version, you can also check this table:

| eslint version | eslint-config-mia version |
| -------------- | ------------------------- |
| 6.8.0          | 3.0.0                     |
| 8.x            | 8.0.0                     |
| 9.x            | 9.0.0                     |


## How to use it

### ESLint v9 (flat config)

ESLint v9 uses the new [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) format by default.
The `@eslint/eslintrc` package is bundled with ESLint v9, so no additional installation is required.
To use this config in your `eslint.config.js`:

```js
const { FlatCompat } = require('@eslint/eslintrc')
const path = require('path')

const compat = new FlatCompat({ baseDirectory: __dirname })

module.exports = [
  ...compat.extends('@mia-platform/eslint-config-mia'),
]
```

### ESLint v9 (legacy mode)

If you are still using the legacy eslintrc format, you can opt-in by setting `ESLINT_USE_FLAT_CONFIG=false` and adding a `.eslintrc` file:

```json
{
  "extends": "@mia-platform/eslint-config-mia"
}
```

### ESLint shareable config

You can also add a `lint` script in your `package.json`:

```json
"scripts": {
  "lint": "eslint ."
}
```

Then you can override rules by adding them directly into your `eslint.config.js`.

## Badge

You want to show that you use this in your project? Feel free to add this badge to your README file.

[![javascript style guide][standard-mia-svg]][standard-mia]

```markdown
[![javascript style guide](https://img.shields.io/badge/code_style-standard--mia-orange.svg)](https://github.com/mia-platform/eslint-config-mia)
```

[travis-svg]: https://travis-ci.org/mia-platform/eslint-config-mia.svg?branch=master
[travis-org]: https://travis-ci.org/mia-platform/eslint-config-mia
[standard-mia-svg]: https://img.shields.io/badge/code_style-standard--mia-orange.svg
[standard-mia]: https://github.com/mia-platform/eslint-config-mia
[npmjs-svg]: https://img.shields.io/npm/v/@mia-platform/eslint-config-mia.svg?logo=npm
[npmjs-com]: https://www.npmjs.com/package/@mia-platform/eslint-config-mia
[share-config]: http://eslint.org/docs/developer-guide/shareable-configs
