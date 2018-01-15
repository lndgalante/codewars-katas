# Codewars Katas

> All my Codewars katas solutions with full test integration, tutorials and more!

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## What is a kata?

A kata basically is an algorithm you have to solve in any prgramming language you desire.

## What's kyu?

Kyu digit determines kata's difficulty level as well as user's rank on a website.

* 1 kyu, 2 kyu - Proficient
* 3 kyu, 4 kyu - Competent
* 5 kyu, 6 kyu - Novice
* 7 kyu, 8 kyu - Beginner

## Purpose

Doing lot of katas could help you to improve your algorithmic thinking. Also could help you to go with more confidence to interviews. I highly recommend this [Tech Interview Handbook](https://github.com/yangshun/tech-interview-handbook) which is a carefully curated content to help you ace your next technical interview.

## Pair Programming

Doing pair-programming is a great exercise to learn from others as well as practice communicational skills. So if you are around Buenos Aires and want to do some katas just hit me up with an issue or send me an email and let's get together at some coffee.

## Main Goal

By the end of 2018 I hope to have almost all katas from 8 to 5 kyu 🤞

## Repository Structure

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

## Test your Might

If you want to test in watch mode all katas run

```bash
 yarn test-watch
```

If you want to test only a particular kyu rank run

```bash
 yarn test-watch -- /6-kyu
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

## Learning Resources

* Regular Expressions / Regex
  * [Awesome Regex](https://github.com/aloisdg/awesome-regex)
  * [Regular Expressions - Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html)
  * [Regular Expressions - The Modern JavaScript Tutorial](https://javascript.info/regexp-introduction)
  * [Breaking the Ice With Regular Expressions - CodeSchool](https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions)

- ES6 / ES2015

  * [ES6 Katas - TDDbin](http://es6katas.org)
  * [ES6 for Everyone - Wes Bos](https://es6.io)
  * [Modern JavaScript Cheatsheet - Beaudru Manuel](https://github.com/mbeaudru/modern-js-cheatsheet)

* Array/Object Methods
  * [Array Explorer - Sarah Drasner](https://sdras.github.io/array-explorer)
  * [Object Explorer - Sarah Drasner](https://sdras.github.io/object-explorer)

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

## Tips

1. Katas has `tags` that could help you in advance to know what to use.
   For example you could solve this kata using regular expressions.

   ![Codewars tags](https://image.ibb.co/ekxm96/www_codewars_com_kata_search_my_languages_q_r_7_xids_completed_beta_false_order_by_total_completed_desc.png)

2. Katas could have some issues that goes beyond your implementation. If you're stuck check the `Issues`.
   Just click where it says `1 Issue Reported` above the `Instructions`.

   ![Codewars issues](https://image.ibb.co/b65pU6/www_codewars_com_kata_sort_the_gift_code_train_javascript.png)

3. Finally check the `discussions` in case the Instructions aren't really clear.
   Click on the `Discuss` button under the `Sample Tests`.

   ![Codewars issues](https://image.ibb.co/j6okmm/www_codewars_com_kata_sort_the_gift_code_train_javascript_1.png)

## More Helpful Resources

* [Computer Science in JavaScript - Nicholas C. Zakas](https://github.com/nzakas/computer-science-in-javascript)
* [30 Seconds of Code - Angelos Chalaris](https://github.com/Chalarangelo/30-seconds-of-code)
* [Gitter Chatroom - Codewars Official](https://gitter.im/Codewars/codewars.com)
* [Algos Explained - YouTube Channel](https://www.youtube.com/channel/UCwsRKWt23kxOL1Fb73i0uUg/videos)
* [Performing Code Katas - Micah Martin](https://8thlight.com/blog/micah-martin/2013/05/28/performing-code-katas.html)
* [Manifesto for Software Craftsmanship](http://manifesto.softwarecraftsmanship.org)
* [Awesome Codewars - Codewars Best Practices](https://github.com/dwqs/awesome-codewars/blob/master/summary.md)
* [A collection of kata from Pragmatic Programmers](http://codekata.pragprog.co)
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

[![CodeWars](https://www.codewars.com/users/lndgalante/badges/small)](https://www.codewars.com/users/lndgalante 'My Honor Badge')

## License

MIT © **[`Leonardo Galante`](https://leonardogalante.com)**
