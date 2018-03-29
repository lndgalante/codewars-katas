/*
  Title:
    Configure package json for a node application

  Description:
    Node applications require a file named package.json on the root of the project.

    You can create this file manually or have the command npm init to assist you in this process.

    The fields name and version are mandatory. But there a lot of other fields that you can include:

    for a documentation on all fields see https://docs.npmjs.com/files/package.json

    name: must be lowercase and url friendly
    version: must include major, minor and patch version
    description: can contain a description of your project
    main: the entry point of your application (when running node without args)
    scripts: a set of commands that can be executed with npm run <cmd>
    keywords: an array of strings containing keywords that describe your application
    bugs: an object with the url and/or email to contact about bugs
    license: a valid SPDX license or UNLICENSED (proprietary) or SEE LICENSE IN <filename>
    author: the name, email and url in a single string or an object with these three properties
    contributors: an array of items that follow the same rules as author
    repository: an object with type (e.g. git) and url (e.g. git url)
    private: true|false; if true the repository field can be omitted without any warnings
    preferGlobal: true|false; if your application is preferred to be installed globally
    engines: object listing engines and versions used by your application
    os: array of strings with supported OS
    cpu: array of strings with supported CPU
    dependencies: run-time dependencies of your application, things that will run in production
    devDependencies: compile-time dependencies of your application, things that should not be in production
    The dependencies is an object with the name of modules as keys and the values are the versions. For example to require babel in your application you would have these entries:

    {
      "babel-core": "^6.0.0",
      "babel-polyfill": "^6.0.0",
      "babel-preset-es2015": "^6.0.0",
      "babel-preset-stage-0": "^6.0.0"
    }
    Your task
    Create a package.json configuration and assign it to the configuration constant so it can be tested.

    To pass the kata you need only the least that a real package file would require.

    Notes
    the kata version validation doesn't handle all cases and isn't 100% accurate, so don't try to be too fancy, stick to with the simple
    to simplify the license validation this kata only allows the following
    ISC
    MIT
    UNLICENSED
    SEE LICENSE IN filename

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
const configuration = {
  license: 'MIT',
  name: 'codewars-katas',
  description: 'All my CodeWars katas',
  version: '0.0.1',
  author: {
    name: 'Leonardo Galante',
    email: 'lndgalante@gmail.com',
    url: 'https://leonardogalante.com',
  },
  dependencies: {
    lodash: '^4.17.5',
    ramda: '^0.25.0',
  },
  devDependencies: {
    '@types/jest': '^22.2.2',
    'eslint-config-prettier': '^2.9.0',
    'eslint-plugin-jest': '^21.13.0',
    husky: '^0.14.3',
    jest: '^22.4.4',
    prettier: '^1.11.1',
    xo: '0.18.2',
  },
  scripts: {
    lint: 'xo',
    test: 'jest',
    'test-watch': 'jest --watchAll',
    precommit: 'npm run lint && npm run test',
  },
  xo: {
    esnext: true,
    extends: ['prettier', 'plugin:jest/recommended'],
    ignores: ['boilerplate.js', 'boilerplate.test.js'],
  },
  prettier: {
    semi: false,
    tabWidth: 2,
    printWidth: 80,
    singleQuote: true,
    trailingComma: 'es5',
    eslintIntegration: true,
  },
  jest: {
    testPathIgnorePatterns: ['./boilerplate.js', './boilerplate.test.js'],
  },
}

// Function Export
module.exports = configuration
