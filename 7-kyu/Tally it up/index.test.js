
const scoreToTally = require('.')

test('Test 0', () => {
          expect(scoreToTally(3)).toBe('c', "Should return 'c'");
        })

test('Test 1', () => {
          expect(scoreToTally(10)).toBe('e <br>e <br>', "Should return 'e <br>e <br>'");
        })

