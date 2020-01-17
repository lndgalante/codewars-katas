const swap = require('.');

test('Test 1', () => {
  expect(swap([123, 456])).toEqual([456, 123]);
});
