
const checkRoot = require('.')

test('Test 0', () => {
          expect(checkRoot('4,5,6,7')).toBe( '841, 29')
        })

test('Test 1', () => {
          expect(checkRoot('3,s,5,6')).toBe( 'incorrect input')
        })

