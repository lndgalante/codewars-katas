# codewars-katas

> All my Codewars katas solutions with full test integration, tutorials and more!

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Purpose

Doing lot of katas could help you to improve your algorithmic thinking. Also could help you to go with more confidence to interviews. I highly recommend this [Tech Interview Handbook](https://github.com/yangshun/tech-interview-handbook) which is a carefully curated content to help you ace your next technical interview.

## Repo structure

There's a folder for each kyu (rank) with a folder per kata (algorithm)

* 8-kyu

  * Mr. Freeze
  * ...

* 7-kyu
  * Binary Addition
  * ...
* 6-kyu
  * Bit Counting
  * ...
* 5-kyu
  * Break camelCase
  * ...

Each kata folder has inside two files

* `index.js`
  * Title\*
  * Description\*
  * Examples
  * Notes
  * Kata Link\*
  * Discuss Link\*
  * Solutions Link\*
  * Long Solution\*
  * Short Solution
  * Function Exports\*

- `index.test.js`
  * With one or more test cases

## Create a new Kata

To generate a new `index.js` and `index.test.js` run

`> ./new.sh [kata-name]`

## Test your might

If you want to test all katas run

```bash
 yarn test
```

If you want to test only a particular kyu rank run

```bash
 yarn test 6-kyu
```

## Development Dependencies

* [Lodash](https://github.com/lodash/lodash) and [Ramda](https://github.com/ramda/ramda) for using some utility
* [Prettier](https://github.com/prettier/prettier) for code-formatting
* [Husky](https://github.com/typicode/husky) for pre-commit hook
* [Types](https://www.npmjs.com/package/@types/jest) for types definitions
* [XO](https://github.com/sindresorhus/xo) for code-linting
* [Jest](https://github.com/facebook/jest) for testing

I also use [Quokka](https://quokkajs.com) Pro Edition for rapid prototyping that runs over the last Node.js version.
If you are using Quokka Pro you have this helpful feature called [Live Comments](https://medium.com/@artem.govorov/using-live-code-comments-to-quickly-measure-code-performance-with-wallaby-js-and-quokka-js-7931a896133)

## Learning resources

* Regular Expressions / Regex
  * [Awesome Regex](https://github.com/aloisdg/awesome-regex)
  * [Regular Expressions - Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html)
  * [Regular Expressions - The Modern JavaScript Tutorial](https://javascript.info/regexp-introduction)
  * [Breaking the Ice With Regular Expressions - CodeSchool](https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions)

- ES6 / ES2015

  * [ES6 for Everyone - Wes Bos](https://es6.io)
  * [Modern JavaScript Cheatsheet - Beaudru Manuel](https://github.com/mbeaudru/modern-js-cheatsheet)

* Array Methods
  * [Array Explorer - Sarah Drasner](https://sdras.github.io/array-explorer)

- Good Practices
  * [Clean Code JavaScript - Ryan McDermott](https://github.com/ryanmcdermott/clean-code-javascript)

## Personal Challenge

Try to solve 5 katas a day from kyu 8 to 5, sorted by most completed and filtered by no completed

* [8 kyu - 322 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-8&xids=completed&beta=false&order_by=total_completed+desc)
* [7 kyu - 1298 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-7&xids=completed&beta=false&order_by=total_completed+desc)
* [6 kyu - 1262 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-6&xids=completed&beta=false&order_by=total_completed+desc)
* [5 kyu - 480 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-5&xids=completed&beta=false&order_by=total_completed+desc)

I'll begin to do katas with kyu 4 to 1 when having lots of experience with katas with kyu 8 to 5.

* [4 kyu - 169 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-4&xids=completed&beta=false&order_by=total_completed+desc)
* [3 kyu - 60 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-3&xids=completed&beta=false&order_by=total_completed+desc)
* [2 kyu - 29 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-2&xids=completed&beta=false&order_by=total_completed+desc)
* [1 kyu - 15 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-1&xids=completed&beta=false&order_by=total_completed+desc)

By the end of 2018 I hope to have it almost all completed 🤞

## Miscellaneous

* [Angelos Chalaris - 30 Seconds of Code](https://github.com/Chalarangelo/30-seconds-of-code)
* [Awesome Codewars - Codewars Best Practices](https://github.com/dwqs/awesome-codewars/blob/master/summary.md)
* [Codewars CLI - A missing command line client for Codewars API](https://github.com/shime/codewars)

## Similar Plattforms

* [Codility](https://codility.com)
* [Exercism](http://exercism.io)
* [CodeEval](https://www.codeeval.com)
* [LeetCode](https://leetcode.com)
* [CodeChef](https://www.codechef.com)
* [CoderByte](https://coderbyte.com)
* [CodeFights](https://codefights.com)
* [HackerRank](https://www.hackerrank.com)

## Badge

[![CodeWars](https://www.codewars.com/users/lndgalante/badges/small)](https://www.codewars.com/users/lndgalante "My Honor Badge")

## Licencia

MIT © **[`Leonardo Galante`](https://leonardogalante.com)**
