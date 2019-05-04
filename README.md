<div align="center">

# eslint-config-mia

[![Build Status][travis-svg]][travis-org]
[![javascript style guide][standard-mia-svg]][standard-mia]
[![NPM version][npmjs-svg]][npmjs-com]

</div>

**The ESLint [Shareable Config][share-config] for Mia-Platform JavaScript Style**

## Getting Started

### Install

The package require `eslint` to work, to list the correct version you can run:

```sh
npm info "@mia-platform/eslint-config-mia@latest" peerDependencies
```

### NPM 5+

You can run this command:

```sh
npx install-peerdeps --dev @mia-platform/eslint-config-mia
```

### NPM <5

#### Linux/macOS

You can run this command:

```sh
(
export PKG="@mia-platform/eslint-config-mia";
  npm info "${PKG}@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "${PKG}@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev @mia-platform/eslint-config-mia eslint@^#.#.#
```

#### Windows

If using **npm < 5**, Windows users can either install all the peer dependencies manually,
or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev @mia-platform/eslint-config-mia
```

The cli will produce and run a command like:

```sh
npm install --save-dev @mia-platform/eslint-config-mia eslint@^#.#.#
```

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
