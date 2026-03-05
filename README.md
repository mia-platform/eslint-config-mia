<div align="center">

# eslint-config-mia

[![Build Status][travis-svg]][travis-org]
[![javascript style guide][standard-mia-svg]][standard-mia]
[![NPM version][npmjs-svg]][npmjs-com]

</div>

**The ESLint [Shareable Config][share-config] for Mia-Platform JavaScript Style**

## Getting Started



### Requirements

- Node.js 16+

### Install

You can easily install the package with npm:

```sh
npm install --save-dev @mia-platform/eslint-config-mia eslint@^#.#.#
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


## How to use it

ESLint Shareable Configs are meant to work with the `extends` feature of the `.eslintrc` file.
You can learn more about [Shareable Config][share-config] on the official ESLint website.

To set up the config add a file named `.eslintrc` with this content:

```json
{
  "extends": "@mia-platform/eslint-config-mia"
}
```

Then you can override settings from the shareable configuration by adding them directly
into your `.eslintrc` file.

Or you can add this snippet in your `package.json` and add the override inside the `eslintConfig`
object:

```json
"eslintConfig": {
  "extends": "@mia-platform/eslint-config-mia"
}
```

Then you can add a new script in your `package.json` like this:

```json
"scripts": {
  "lint": "eslint . --ignore-path .gitignore"
}
```

The `--ignore-path` can be ignored (🙃) if you already have a `.eslintignore` file. We raccomend to use it
for avoiding to parse and lint files that will not be committed.

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
