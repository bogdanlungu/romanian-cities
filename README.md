# romanian-cities

All the cities in Romania with their population based on the 2002 and 2011 censuses.

## Installation

This package is distributed via npm:

```
npm install romanian-cities
```

## Usage

```javascript
const cities = require('romanian-cities');

const allCities = cities.all;
const randomCity = cities.random();
const randomCityName = randomCity.name;
const randomCityCounty = randomCity.county;
const randomCityPopulation_2002 = randomCity.population_2002;
const randomCityPopulation_2011 = randomCity.population_2011;
const twoRandomCities = cities.random(2);
```
