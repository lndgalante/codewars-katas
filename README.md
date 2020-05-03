<h1 align="center">Codewars Katas</h1>

<h6 align="center">
  Solutions for Codewars katas
</h6>

<p align="center">
  <a href="https://github.com/sindresorhus/xo">
    <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
  <a href="https://david-dm.org/lndgalante/codewars-katas.svg">
    <img src="https://david-dm.org/lndgalante/codewars-katas.svg?style=flat-square">
  </a>
  <a href="https://david-dm.org/lndgalante/codewars-katas/dev-status.svg">
    <img src="https://david-dm.org/lndgalante/codewars-katas/dev-status.svg?style=flat-square">
  </a>
</p>

### Table of Contents

- [Introduction](#introduction)
- [Vocabulary](#vocabulary)
- [Node.js & ES6+ Support](#node.js-&-es6+-support)
- [Purpose](#purpose)
- [Repository Structure](#repository-structure)
- [Global Index](#global-index)
- [Create a new Kata](#create-a-new-kata)
- [Test your might](#test-your-might)
- [Performance tests](#performance-tests)
- [Development Dependencies](#development-dependencies)
- [Learning Resources](#learning-resources)
- [Tips](#tips-&-tricks)
- [More Learning Resources](#more-learning-resources)
- [Similar Platforms](#similar-platforms)
- [Contributors](#contributors)
- [License](#license)

### Introduction

Solutions with tests, tips and tutorials for <a href="https://www.codewars.com">Codewars</a> katas.
Almost every kata has a long solution and a shorter one, IMHO a long descriptive solution it's preferred over a cryptic one-liner, unless it's understandable for your entire team.

### Vocabulary

- Kata: is an algorithm you have to solve in any programming language you desire

- Kyu: is a digit that determines kata difficulty level as well as the user rank on the platform

### Node.js & ES6+ Support

The current Node versions [available](https://github.com/Codewars/codewars.com/wiki/Language-JavaScript) are the following [Node.js v6.x](https://kangax.github.io/compat-table/es6/#node6_5), [Node.js v8.x](https://kangax.github.io/compat-table/es6/#node8_7) and [Node.js v10.x](https://kangax.github.io/compat-table/es6/#node10_9)

### Purpose

Practicing katas could help you to improve your algorithmic thinking. It could also help at interviews being more confident and learning a few tricks of your preferred language.
I highly recommend the [Tech Interview Handbook](https://github.com/yangshun/tech-interview-handbook) which will help you ace your next technical interview.

### Repository Structure

There's a folder for each kata nested in its own kyu

```ascii
├── 8-kyu/
│   ├── Mr. Freeze/
│   │   ├── index.js
│   │   └── index.test.js
│   └── ...
│
├── 7-kyu/
│   ├── Binary Addition/
│   │   ├── index.js
│   │   └── index.test.js
│   └── ...
```

### Global Index

This index will help you find all katas ordered alphabetically with a link to the kata folder.

- ✅ [8 Kyu - Index](https://github.com/lndgalante/codewars-katas/tree/master/lib/index/8-kyu.md)

* 🚧 [7 Kyu - Index](https://github.com/lndgalante/codewars-katas/tree/master/lib/index/7-kyu.md)

- ⏸️ [6 Kyu - Index](https://github.com/lndgalante/codewars-katas/tree/master/lib/index/6-kyu.md)

* ⏸️ [5 Kyu - Index](https://github.com/lndgalante/codewars-katas/tree/master/lib/index/5-kyu.md)

Notes:

- ✅ All completed
- 🚧 Work in progress
- ⏸️ Paused until last WIP is completed

To update the global index run

```bash
> npm run update-index
```

### Create a new Kata

Since the kata generator uses some dependencies so you should install those first

```bash
> npm run install-generator-deps
```

To generate a new folder with an `index.js` and `index.test.js` run

```bash
> npm run create-kata [kata link]
```

In example

```bash
> npm run create-kata https://www.codewars.com/kata/drying-potatoes/train/javascript
```

Since this is a 7-kyu kata it will appear under this folder as a folder with its own title "Drying Potatoes".

### Test your Might

If you want to test in watch mode uncommitted files

```bash
> npm run test-watch
```

### Performance tests

Check [Perflink](https://perf.link/) if you want to compare performance between long and short solutions.

### Development Dependencies

- Code Linting: [XO](https://github.com/sindresorhus/xo)
- Code Formatting: [Prettier](https://github.com/prettier/prettier)
- Utilities: [Lodash](https://github.com/lodash/lodash) & [Ramda](https://github.com/ramda/ramda)
- Pre-commit hook: [Husky](https://github.com/typicode/husky)
- Testing: [Jest](https://github.com/facebook/jest) & [Jest-extended](https://github.com/jest-community/jest-extended)
- Types definitions for Jest: [Types/jest](https://www.npmjs.com/package/@types/jest)

I also use [Quokka](https://quokkajs.com) Pro Edition for rapid prototyping.
Also I recommend you Quokka Pro that has [Live Comments](https://medium.com/@artem.govorov/using-live-code-comments-to-quickly-measure-code-performance-with-wallaby-js-and-quokka-js-7931a896133).

### Tips & Tricks

1.  Katas has `tags` that could help you in advance to know what to use.
    For example you could solve this kata using regular expressions.

    ![Codewars tags](https://image.ibb.co/ekxm96/www_codewars_com_kata_search_my_languages_q_r_7_xids_completed_beta_false_order_by_total_completed_desc.png)

2)  Katas could have some issues that goes beyond your implementation. If you're stuck check the `Issues`.
    Just click where it says `1 Issue Reported` above the `Instructions`.

    ![Codewars issues](https://image.ibb.co/b65pU6/www_codewars_com_kata_sort_the_gift_code_train_javascript.png)

3.  Finally check the `discussions` in case the Instructions aren't really clear.
    Click on the `Discuss` button under the `Sample Tests`.

    ![Codewars issues](https://image.ibb.co/j6okmm/www_codewars_com_kata_sort_the_gift_code_train_javascript_1.png)

4)  After you submit your final solution check the Solutions to learn from other alternatives. If you don't understand them you can leave a comment or check the discussions of each one. Try to learn from these solutions and improve your current one or create a Short Solution of your own.

5.  If you check my solutions the "Long Solution" maybe is longer than the "Short Solution" but is more readable.

6)  If you want to check what solution is faster use [jsPerf](https://jsperf.com) or [JSBench](https://jsbench.me)

### Learning Resources

- Regular Expressions / RegEx

  - [Awesome RegEx](https://github.com/aloisdg/awesome-regex)
  - [Regular Expressions - Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html)
  - [Regular Expressions - The Modern JavaScript Tutorial](https://javascript.info/regexp-introduction)
  - [Breaking the Ice With Regular Expressions - CodeSchool](https://www.pluralsight.com/courses/code-school-breaking-the-ice-with-regular-expressions)
  - [RegExp The Ultra Basics in JavaScript](https://www.youtube.com/watch?v=VrT3TRDDE4M)

* ES6 / ES2015

  - [ES6 Katas - TDDbin](http://es6katas.org)
  - [ES6 for Everyone - Wes Bos](https://es6.io)
  - [Modern JavaScript Cheatsheet - Beaudru Manuel](https://github.com/mbeaudru/modern-js-cheatsheet)

- Array & Objects
  - [Array Explorer - Sarah Drasner](https://sdras.github.io/array-explorer)
  - [Object Explorer - Sarah Drasner](https://sdras.github.io/object-explorer)

* Good Practices
  - [Clean Code JavaScript - Ryan McDermott](https://github.com/ryanmcdermott/clean-code-javascript)

### More Helpful Resources

- [RegEx Snippets](https://github.com/jeffreyshen19/RegEx-Snippets)
- [Learn RegEx](https://github.com/zeeshanu/learn-regex)
- [JavaScript Arrays Cheatsheet](https://devhints.io/js-array)
- [JavaScript Cheatsheet](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/javascript.js)
- [30 Seconds of Code](https://github.com/Chalarangelo/30-seconds-of-code)
- [Codewars Gitter](https://gitter.im/Codewars/codewars.com)
- [Algos Explained](https://www.youtube.com/channel/UCwsRKWt23kxOL1Fb73i0uUg/videos)
- [A curated list of code katas](https://github.com/gamontal/awesome-katas)
- [Algorithms solved in many languages](https://github.com/marcosfede/algorithms)
- [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)
- [A JavaScript optimization handbook](https://mythbusters.js.org)

### Similar Plattforms

- [Codility](https://codility.com)
- [Exercism](http://exercism.io)
- [CodeEval](https://www.codeeval.com)
- [LeetCode](https://leetcode.com)
- [CodeChef](https://www.codechef.com)
- [CoderByte](https://coderbyte.com)
- [CodeFights](https://codefights.com)
- [HackerRank](https://www.hackerrank.com)

### Contributors

Feel free to open issues or send PRs

[![](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/images/0)](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/links/0)[![](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/images/1)](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/links/1)[![](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/images/2)](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/links/2)[![](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/images/3)](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/links/3)[![](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/images/4)](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/links/4)[![](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/images/5)](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/links/5)[![](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/images/6)](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/links/6)[![](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/images/7)](https://sourcerer.io/fame/lndgalante/lndgalante/codewars-katas/links/7)

### License

MIT © **[`Leonardo Galante`](https://leonardogalante.com)**
