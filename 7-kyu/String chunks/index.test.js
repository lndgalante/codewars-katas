
const stringChunk = require('.')

test('Test 1', () => {
          expect(stringChunk('codewars', 2)).toEqual(  ['co', 'de', 'wa', 'rs']);
        })

test('Test 2', () => {
          expect(stringChunk('thiskataeasy', 4)).toEqual( ['this', 'kata', 'easy']);
        })

test('Test 3', () => {
          expect(stringChunk('hello world', 3)).toEqual( ['hel', 'lo ', 'wor', 'ld']);
        })

