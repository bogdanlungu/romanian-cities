// import * as cities from '.'
const cities = require('.')

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

  it('should return a random city from the all cities list', () => {
    const randomItem = [cities.random()]
    expect(cities.all).toEqual(expect.arrayContaining(randomItem))
  })

  it('should be an array of objects', () => {
    const checkObject = cities.all.map((v) => {
      if (typeof v === 'object') {
        return true
      } else {
        return false
      }
    })

    const checkFalse = (element) => {
      return element === false
    }

    expect(!checkObject.some(checkFalse)).toBe(true)
  })

  it('should have all city names as strings and beggining with a capital letter', () => {
    const checkCitiesNames = cities.all.map((v) => {
      if ((typeof v.city === 'string') && (v.city[0] === v.city[0].toUpperCase())) {
        return true
      } else {
        return false
      }
    })

    const checkFalse = function (element) {
      return element === false
    }

    expect(!checkCitiesNames.some(checkFalse)).toBe(true)
  })

  it('should have all county names as strings and beggining with a capital letter', () => {
    const checkCountyNames = cities.all.map((v) => {
      if (v.city !== 'Bucuresti') { // Bucuresti has no county
        if ((typeof v.county === 'string') && (v.county[0] === v.county[0].toUpperCase())) {
          return true
        } else {
          return false
        }
      }
    })

    const checkFalse = function (element) {
      return element === false
    }

    expect(!checkCountyNames.some(checkFalse)).toBe(true)
  })

  it('should have the population values as numbers and greater than 0', () => {
    const checkPopulationValues = cities.all.map((v) => {
      if ((typeof v.population_2002 === 'number' && typeof v.population_2011 === 'number') && (v.population_2002 > 0 && v.population_2011 > 0)) {
        return true
      } else {
        return false
      }
    })

    const checkFalse = function (element) {
      return element === false
    }

    expect(!checkPopulationValues.some(checkFalse)).toBe(true)
  })
})
