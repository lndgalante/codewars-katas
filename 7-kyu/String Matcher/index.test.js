const isMatching = require('.');

test('Test 1', () => {
  expect(isMatching('bouh', '0', 'buh')).toBeFalse();
});

test('Test 2', () => {
  expect(isMatching('kitten', 't', 'eink')).toBeFalse();
});

test('Test 3', () => {
  expect(isMatching('mentalist', 'l.st', 'metan')).toBeFalse();
});

test('Test 4', () => {
  expect(isMatching('impressionistic', 'isis isi', 'precomnt')).toBeTrue();
});
