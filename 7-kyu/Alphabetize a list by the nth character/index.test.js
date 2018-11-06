const sortIt = require('.')

test('Test 1', () => {
  expect(sortIt('bill, bell, ball, bull', 2)).toBe('ball, bell, bill, bull')
})

test('Test 2', () => {
  expect(sortIt('cat, dog, eel, bee', 3)).toBe('bee, dog, eel, cat')
})

test('Test 3', () => {
  expect(
    sortIt(
      'Reinhard von Lohengramm, Emil von Secla, Helmut Rennenkampf, Siegfried Kircheis, Paul von Oberstein, August Samuel Wahlen, Oskar von Reuenthal, Ernst von Eisenach, Hildegard von Mariendorf, Neidhardt Muller, Ernst von Eisenach, Karl Gustav Kempf, Anton Ferner, Adalbert von Fahrenheit, Fritz Josef Bittenfeld, Wolfgang Mittermeyer, Cornelius Lutz',
      8
    )
  ).toBe(
    'Neidhardt Muller, Reinhard von Lohengramm, Anton Ferner, Siegfried Kircheis, Wolfgang Mittermeyer, Emil von Secla, Paul von Oberstein, Ernst von Eisenach, Ernst von Eisenach, Fritz Josef Bittenfeld, Oskar von Reuenthal, Helmut Rennenkampf, Hildegard von Mariendorf, August Samuel Wahlen, Karl Gustav Kempf, Adalbert von Fahrenheit, Cornelius Lutz'
  )
})
