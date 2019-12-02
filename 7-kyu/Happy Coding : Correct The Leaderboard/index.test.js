const correct = require('.')

test('Test 1', () => {
  expect(
    correct(
      `#1 g964
    #2 myjinxin2015
    #3 SteffenVogel_79
    #4 smile67
    #5 Voile`
    )
  ).toBe(`#1 myjinxin2015
    #2 g964
    #3 SteffenVogel_79
    #4 smile67
    #5 Voile`)
})
