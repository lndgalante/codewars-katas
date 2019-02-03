
const remove = require('.')

test('Test 1', () => {
          expect(remove('this is a string',{'t':1, 'i':2})).toBe( 'hs s a string');
        })

test('Test 2', () => {
          expect(remove('hello world',{'x':5, 'i':2})).toBe( 'hello world');
        })

test('Test 3', () => {
          expect(remove('apples and bananas',{'a':50, 'n':1})).toBe( 'pples d bnns');
        })

test('Test 4', () => {
          expect(remove('a',{'a':1, 'n':1})).toBe( '');
        })

test('Test 5', () => {
          expect(remove('codewars',{'c':5, 'o':1, 'd':1, 'e':1, 'w':1, 'z':1, 'a':1, 'r':1, 's':1})).toBe( '');
        })

