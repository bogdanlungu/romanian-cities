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

  it('should return a random city from the all cities list', () => {
    const randomItem = [cities.random()]
    expect(cities.all).toEqual(expect.arrayContaining(randomItem))
  })

  it('should return an array of 3 random cities', () => {
    const randomCities = cities.random(3)
    expect(Array.isArray(randomCities)).toBe(true)
  })

  it('should return an array of 1 random city from the all cities list', () => {
    const randomCities = [cities.random(2)]
    const cityInsideArray = randomCities[0]
    expect(cities.all).toEqual(expect.arrayContaining(cityInsideArray))
  })

  it('should be an array of objects', () => {
    const checkObject = cities.all.map((v) => {
      if (typeof v === 'object') {
        return true
      }

      return false
    })

    const checkFalse = (element) => {
      return element === false
    }

    expect(!checkObject.some(checkFalse)).toBe(true)
  })

  it('should have all city names as strings and beggining with a capital letter', () => {
    const checkCitiesNames = cities.all.map(({ city }) => {
      if ((typeof city === 'string') && (city[0] === city[0].toUpperCase())) {
        return true
      }

      return false
    })

    const checkFalse = function (element) {
      return element === false
    }

    expect(!checkCitiesNames.some(checkFalse)).toBe(true)
  })

  it('should have all county names as strings and beggining with a capital letter', () => {
    const checkCountyNames = cities.all.map(({ city, county }) => {
      if (city !== 'Bucuresti') {
        if ((typeof county === 'string') && (county[0] === county[0].toUpperCase())) {
          return true
        }

        return false
      }
    })

    const checkFalse = function (element) {
      return element === false
    }

    expect(!checkCountyNames.some(checkFalse)).toBe(true)
  })

  it('should have the population values as numbers and greater than 0', () => {
    const checkPopulationValues = cities.all.map(({ population_2002, population_2011}) => {
      if ((typeof population_2002 === 'number' && typeof population_2011 === 'number') && (population_2002 > 0 && population_2011 > 0)) {
        return true
      }

      return false
    })

    const checkFalse = function (element) {
      return element === false
    }

    expect(!checkPopulationValues.some(checkFalse)).toBe(true)
  })
})
