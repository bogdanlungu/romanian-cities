import cities from './cities.json'
import uniqueRandomArray from 'unique-random-array'

const getRandomCity = uniqueRandomArray(cities)

export const all = cities

export function random (number) {
  /**
   * It returns one random city from the list if no argument is specfied
   * @param {number} number the number of random cities that will be returned
   */
  if (number === undefined) {
    return getRandomCity()
  } else {
    const randomItems = []
    const result = Array.apply(null, { length: number }).map(Number.call, Number)
    result.map(() => {
      randomItems.push(getRandomCity())
    })
    return randomItems
  }
}
