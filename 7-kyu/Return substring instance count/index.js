/*
  Title:
    Return substring instance count

  Description:
    Complete the solution so that it returns the number of times the search_text is found within the full_text.

  Examples:
    solution('aa_bb_cc_dd_bb_e', 'bb')
      # should return 2 since bb shows up twice
    solution('aaabbbcccc', 'bbb')
      # should return 1

  Kata Link:
    https://www.codewars.com/kata/return-substring-instance-count/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/return-substring-instance-count/train/javascript/discuss

  Solutions Link:
    https://www.codewars.com/kata/return-substring-instance-count/train/javascript/solutions
*/

// Long Solution
const solution = (fullText, searchText) => fullText.split(searchText).length - 1

module.exports = solution
