/*
  Title:
    Bob's Short Forms

  Description:
    Bob is a theoretical coder - he doesn't write code, but comes up with theories, formulas and algorithm ideas.
    You are his secretary, and he has tasked you with writing the code for his newest project - a method for making the short form of a word.
    Write a function shortForm(C# ShortForm, Python short_form) that takes a string and returns it converted into short form using the rule:
    Remove all vowels, except for those that are the first or last letter. Do not count 'y' as a vowel, and ignore case.
    Also note, the string given will not have any spaces; only one word, and only Roman letters.

  Examples:
    shortForm("assault");
    // should return "asslt"

  Kata Link:
    https://www.codewars.com/kata/bobs-short-forms

  Discuss Link:
    https://www.codewars.com/kata/bobs-short-forms/discuss

  Solutions Link:
    https://www.codewars.com/kata/bobs-short-forms/solutions
*/

// Long Solution - https://regexr.com/48sjj
const shortForm = string => string.replace(/\B[aeiou]\B/gi, '')

// Function Export
module.exports = shortForm
