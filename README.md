# Codewars Katas

> 🥋 Codewars katas repository with solutions, test integration, tips and tutorials

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![dependencies](https://david-dm.org/lndgalante/codewars-katas.svg)](https://david-dm.org/lndgalante/codewars-katas.svg) [![code style: prettier](https://david-dm.org/lndgalante/codewars-katas/dev-status.svg)](https://david-dm.org/lndgalante/codewars-katas/dev-status.svg) [![codecov](https://codecov.io/gh/lndgalante/codewars-katas/branch/master/graph/badge.svg)](https://codecov.io/gh/lndgalante/codewars-katas)

## What's a kata?

A kata basically is an algorithm you have to solve in any programming language you desire.

## What's kyu?

Kyu digit determines kata difficulty level as well as the user rank on the platform.

## Global Index

This index will help you find all katas ordered alphabetically with a link to the kata folder.

- [8 Kyu](https://github.com/lndgalante/codewars-katas/tree/master/8-kyu/index.md)
- 7 Kyu will be generated when all are finished

## Node.js versions & ES6+ support

The current Node versions [available](https://github.com/Codewars/codewars.com/wiki/Language-JavaScript) are the following:

- [Node.js v6.11.0](https://kangax.github.io/compat-table/es6/#node6_5)
- [Node.js v8.1.3](https://kangax.github.io/compat-table/es6/#node8_7)

## Purpose

Practicing katas could help you to improve your algorithmic thinking. It could also helps going to interviews more confident.
I highly recommend this [Tech Interview Handbook](https://github.com/yangshun/tech-interview-handbook) which help you ace your next technical interview.

## Repository Structure

There's a folder for each kyu (rank) with a folder per kata (algorithm)

- 8-kyu

  - Mr. Freeze
    - index.js
    - index.test.js

- 7-kyu
  - Binary Addition
    - index.js
    - index.test.js

## Create a new Kata

To generate a new folder with a `index.js` and `index.test.js` run

```bash
> ./new.sh "kata-name"
```

For example

```bash
> ./new.sh "Area of a Square"
```

## Test your Might

If you want to test in watch mode all katas run

```bash
>  yarn test-watch
```

If you want to test only a particular kyu rank run

```bash
> yarn test-watch 6-kyu
```

## Development Dependencies

- Code Formatting and Linting: [Prettier](https://github.com/prettier/prettier) and [XO](https://github.com/sindresorhus/xo)
- Utilities: [Lodash](https://github.com/lodash/lodash) and [Ramda](https://github.com/ramda/ramda)
- Pre-commit hook: [Husky](https://github.com/typicode/husky)
- Types definitions: [Types](https://www.npmjs.com/package/@types)
- Testing: [Jest](https://github.com/facebook/jest)
- Extra matchers: [Jest-extended](https://github.com/jest-community/jest-extended)

I also use [Quokka](https://quokkajs.com) Pro Edition for rapid prototyping.
Also I recommend you Quokka Pro that has [Live Comments](https://medium.com/@artem.govorov/using-live-code-comments-to-quickly-measure-code-performance-with-wallaby-js-and-quokka-js-7931a896133).

## Learning Resources

- Regular Expressions / RegEx

  - [Awesome RegEx](https://github.com/aloisdg/awesome-regex)
  - [Regular Expressions - Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html)
  - [Regular Expressions - The Modern JavaScript Tutorial](https://javascript.info/regexp-introduction)
  - [Breaking the Ice With Regular Expressions - CodeSchool](https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions)
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

## Personal Challenge

Try to solve all katas from 8 kyu first then go to the next kyu until 5 kyu. Check out progress [here](https://codewars-progress.now.sh).

- [x] [8 kyu - 361 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-8&xids=completed&beta=false&order_by=total_completed+desc)
- [ ] [7 kyu - 1463 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-7&xids=completed&beta=false&order_by=total_completed+desc)
- [ ] [6 kyu - 1490 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-6&xids=completed&beta=false&order_by=total_completed+desc)
- [ ] [5 kyu - 603 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-5&xids=completed&beta=false&order_by=total_completed+desc)

I'll begin doing katas with kyu 4 to 1 when I finish all katas from above.

- [ ] [4 kyu - 169 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-4&xids=completed&beta=false&order_by=total_completed+desc)
- [ ] [3 kyu - 60 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-3&xids=completed&beta=false&order_by=total_completed+desc)
- [ ] [2 kyu - 29 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-2&xids=completed&beta=false&order_by=total_completed+desc)
- [ ] [1 kyu - 15 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-1&xids=completed&beta=false&order_by=total_completed+desc)

## Tips

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

## More Helpful Resources

- [Jeffrey Shen - RegEx Snippets](https://github.com/jeffreyshen19/RegEx-Snippets)
- [Zeeshan Ahmad - Learn RegEx](https://github.com/zeeshanu/learn-regex)
- [DevHints Cheatsheets - JavaScript Arrays Cheatsheet](https://devhints.io/js-array)
- [Awesome Cheatsheets - JavaScript Cheatsheet](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/javascript.js)
- [Angelos Chalaris - 30 Seconds of Code](https://github.com/Chalarangelo/30-seconds-of-code)
- [Gitter Chatroom - Codewars Official](https://gitter.im/Codewars/codewars.com)
- [Algos Explained - YouTube Channel](https://www.youtube.com/channel/UCwsRKWt23kxOL1Fb73i0uUg/videos)
- [Awesome Katas - A curated list of code katas](https://github.com/gamontal/awesome-katas)
- [Federico Marcos - Algorithms solved in many languages](https://github.com/marcosfede/algorithms)
- [Oleksii Trekhleb - JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)
- [JS MythBusters - A JavaScript optimization handbook](https://mythbusters.js.org)

## Similar Plattforms

- [Codility](https://codility.com)
- [Exercism](http://exercism.io)
- [CodeEval](https://www.codeeval.com)
- [LeetCode](https://leetcode.com)
- [CodeChef](https://www.codechef.com)
- [CoderByte](https://coderbyte.com)
- [CodeFights](https://codefights.com)
- [HackerRank](https://www.hackerrank.com)

## Badge

[![CodeWars](https://www.codewars.com/users/lndgalante/badges/small)](https://www.codewars.com/users/lndgalante 'My Honor Badge')

## License

MIT © **[`Leonardo Galante`](https://leonardogalante.com)**
