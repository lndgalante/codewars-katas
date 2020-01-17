const transform = require('.');

test('Test 1', () => {
  expect(transform('elevation')).toBe('e2lvation');
});

test('Test 2', () => {
  expect(transform('transplantology')).toBe('t2ra2n2spl2o2gy');
});

test('Test 3', () => {
  expect(transform('economics')).toBe('ec2o2nmis');
});

test('Test 4', () => {
  expect(transform('embarrassed')).toBe('e2mba2r2s2d');
});

test('Test 5', () => {
  expect(transform('impressive')).toBe('i2mpre2s2v');
});
