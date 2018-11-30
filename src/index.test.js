import * as cities from '.'

const bucharest = [{
  'city': 'Bucuresti',
  'county': '',
  'population_2011': 1883425,
  'population_2002': 1926334
}]

describe('The cities', () => {
  it('should have a length of 320', () => {
    expect(cities.all.length).toBe(320)
  })

  it('should contain the bucharest object', () => {
    expect(cities.all).toEqual(expect.arrayContaining(bucharest))
  })
})
