const Labrador = require('.')

test('Test 1', () => {
  const spitsy = new Labrador('Spitsy', 10, 'Male', 'Donald')

  expect(spitsy.name).toBe('Spitsy')
  expect(spitsy.age).toBe(10)
  expect(spitsy.gender).toBe('Male')
  expect(spitsy.species).toBe('Labrador')
  expect(spitsy.legs).toBe(4)
  expect(spitsy.size).toBe('Large')
  expect(spitsy.master).toBe('Donald')
  expect(spitsy.loyal).toBeTrue()
})

test('Test 2', () => {
  const edward = new Labrador('Edward', 3, 'Male', 'Emma')

  expect(edward.name).toBe('Edward')
  expect(edward.age).toBe(3)
  expect(edward.gender).toBe('Male')
  expect(edward.species).toBe('Labrador')
  expect(edward.legs).toBe(4)
  expect(edward.size).toBe('Large')
  expect(edward.master).toBe('Emma')
  expect(edward.loyal).toBeTrue()
})
