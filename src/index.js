import cities from './cities.json'
import uniqueRandomArray from 'unique-random-array'

const getRandomCity = uniqueRandomArray(cities)

export const all = cities

export function random (number) {
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
