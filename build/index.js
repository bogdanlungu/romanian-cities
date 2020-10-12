'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = undefined;
exports.random = random;

var _cities = require('./cities.json');

var _cities2 = _interopRequireDefault(_cities);

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomCity = (0, _uniqueRandomArray2.default)(_cities2.default);

var all = exports.all = _cities2.default;

function random(number) {
  /**
   * It returns one random city from the list if no argument is specfied
   * @param {number} number the number of random cities that will be returned
   */

  if (number === undefined) {
    return getRandomCity();
  } else {
    var randomItems = [];
    var result = Array.apply(null, { length: number }).map(Number.call, Number);
    result.map(function () {
      randomItems.push(getRandomCity());
    });

    return randomItems;
  }
}