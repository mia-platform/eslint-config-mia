# Changes to `eslint-config-mia`

## TBR

- Update to ecmaVersion 2019 and enable jsx feature
- Add no-async-promise-executor rule
- Add no-await-in-loop rule
- Add no-misleading-character-class rule
- Add require-atomic-updates rule
- Add no-else-return rule
- Add no-octal-escape rule
- Add no-undefined rule
- Add camelcase rule for functions
- Add prefer-object-spread rule as a warning
- Change no-shadow rule for allowing `fastify`, and `next` variables to
  be shadowed and disallow the builtin globals one
- Change no-use-before-define rule for allowing functions to be used before
  declaration
- Change func-name rule to be `as-needed`
- Change id-length rule to ignore properties and allow `i`, `j`, `x`,
  `y`, `z` names
- Change max-depth rule to be max 4
- Change max-len rule for ignoring trailing comments
- Change max-nested-callbacks rule to be max 4
- Change max-statements rule to be max 25 and ignoring the top level functions
- Change max-statements-per-line rule to be max 2
- Change no-undescore-dangle rule to allow the use for after `this` and `super`
- Change quote-props rule for ignoring unnecessary quotes and for requiring it
  for keywords
- Change quote-props rule for always allow template literals
- Removed require-await rule
- Removed no-process-env rule
- Removed new-cap rule
- Removed no-inline-comments rule
- Disable some rules for the *.test.js files

## v1.7.9 (2018-08-06)

- Removed no-magic-numbers rule

## v1.7.8 (2018-01-04)

- Removed complexity rule
- Removed camelcase rule
- Removed strict rule

## v1.7.7 (2017-11-15)

- Add spread operator support

## v1.7.6 (2017-10-13)

- removed arrow-body-style rule

## v1.7.5 (2017-10-13)

- removed arrow-parens rule

## v1.7.4 (2017-10-10)

- allow `_id` for no-undescore-dangle

## v1.7.3 (2017-10-02)

- no-sync changed to warning

## v1.7.2 (2017-09-22)

- remove options to no-param-reassign

## v1.7.1 (2017-09-22)

- relax no-param-reassign

## v1.7.0 (2017-09-22)

- Add `0` and `1` to the allowed magic numbers

## v1.6.0 (2017-09-18)

- relax some rules

## v1.5.0 (2017-09-07)

- enable 2017 ecma

## v1.4.0 (2017-09-05)

- `;` are errors

## v1.3.0 (2017-08-11)

- Change org name from makeitapp to mia-platform
- no-magic-number is an error
- no spaces around `[]`
- teak to some rules

## v1.2.0 (2017-08-05)

- Add the bulk of rules to the linter

## v1.1.0 (2017-08-02)

- Add missing package information

## v1.0.0 (2017-08-02)

- Initial Release
