import * as cities from '.'

describe('The cities', () => {
  it('should have a length of 320', () => {
    expect(cities.all.length).toBe(320)
  })
})
