# eslint-config-mia
[![npm link][npm-svg]][npm-page]
[![javascript style guide][standard-mia-svg]][standard-mia]

**The ESLint [Shareable Config][share-config] for Mia-Platform JavaScript Style**

## Installation
This module is meant to be used only for advanced users of ESLint,
for less headache you can be more comfortable using [`@mia-platform/standard-mia`][standard-mia].  

```sh
npm i --save-dev @mia-platform/eslint-config-mia
```

## How to use it
ESLint Shareable Configs are meant to work with the `extends` feature of the `.eslintrc` file.  
You can learn more about [Shareable Config][share-config] on the official ESLint website.

To set up the config, run the following command:

```sh
npm install --save-dev eslint @mia-platform/eslint-config-mia
```

Then, add a file named `.eslintrc` with this content:

```json
{
  "extends": "eslint-config-mia"
}
```

Then you can override settings from the shareable configuration by adding them directly
into your `.eslintrc` file.

## Badge
You want to show that you use this in your project? Feel free to add this badge to your README file.

[![javascript style guide][standard-mia-svg]][standard-mia]
```markdown
[![javascript style guide][https://img.shields.io/badge/code_style-standard--mia-orange.svg?style=flat-square]](https://github.com/mia-platform/standard-mia)
```

[npm-svg]: https://img.shields.io/npm/v/@makeitapp/eslint-config-mia.svg?logo=npm&style=flat-square
[npm-page]: https://www.npmjs.com/package/@makeitapp/eslint-config-mia
[standard-mia-svg]: https://img.shields.io/badge/code_style-standard--mia-orange.svg?style=flat-square
[standard-mia]: https://github.com/mia-platform/standard-mia
[share-config]: http://eslint.org/docs/developer-guide/shareable-configs
