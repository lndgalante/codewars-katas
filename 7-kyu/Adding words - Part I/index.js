/*
  Title:
    Adding words - Part I

  Description:
    This is the first part of this kata series. Second part is here and third part is here
    Add two English words together!

    Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that

      //javascript
      var k = new Arith("three");
      k.add("seven"); //this should return "ten"  //c++
      Arith* k = new Arith("three");
      k->add("seven"); //this should return string "ten"

    Input - Will be between zero and ten and will always be in lower case
    Output - Word representation of the result of the addition. Should be in lower case

  Kata Link:
    https://www.codewars.com/kata/adding-words-part-i

  Discuss Link:
    https://www.codewars.com/kata/adding-words-part-i/discuss

  Solutions Link:
    https://www.codewars.com/kata/adding-words-part-i/solutions
*/

// Long Solution
/*
class Arith {
  constructor(initialWordNumber) {
    this.numberToWordDictionary = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
    }
    this.wordToNumberDictionary = Object.keys(this.numberToWordDictionary)
    this.initialNumber = this.getNumberFromWord(initialWordNumber)
  }

  getNumberFromWord(word) {
    return this.numberToWordDictionary[word]
  }

  getWordFromNumber(number) {
    return this.wordToNumberDictionary[number]
  }

  add(newNumber) {
    const sum = this.initialNumber + this.getNumberFromWord(newNumber)
    return this.getWordFromNumber(sum)
  }
}
*/

// Short Solution

class Arith {
  get dictionary() {
    return [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
    ]
  }

  constructor(num) {
    this.number = this.dictionary.indexOf(num)
  }

  add(num) {
    return this.dictionary[this.number + this.dictionary.indexOf(num)]
  }
}

// Function Export
module.exports = Arith
