const sumOfABeach = require('.')

test('Test 1', () => {
  expect(sumOfABeach('SanD')).toBe(1)
})

test('Test 2', () => {
  expect(sumOfABeach('sunshine')).toBe(1)
})

test('Test 3', () => {
  expect(sumOfABeach('sunsunsunsun')).toBe(4)
})

test('Test 4', () => {
  expect(sumOfABeach('123FISH321')).toBe(1)
})

test('Test 5', () => {
  expect(sumOfABeach('weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn')).toBe(4)
})

test('Test 6', () => {
  expect(sumOfABeach('sAnDsandwaTerwatErfishFishsunsunsandwater')).toBe(10)
})

test('Test 7', () => {
  expect(sumOfABeach('joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef ')).toBe(0)
})

test('Test 8', () => {
  expect(sumOfABeach('jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f')).toBe(10)
})

test('Test 9', () => {
  expect(
    sumOfABeach(
      'saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater;jawof;jawio;f'
    )
  ).toBe(100)
})

test('Test 10', () => {
  expect(sumOfABeach('sununsu')).toBe(1)
})

test('Test 11', () => {
  expect(sumOfABeach('sandandndsansa')).toBe(1)
})

test('Test 12', () => {
  expect(sumOfABeach('wateratertererwatewatwa')).toBe(1)
})

test('Test 13', () => {
  expect(sumOfABeach('fishishshfisfi')).toBe(1)
})
