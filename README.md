# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install edgar_sargsyan/lotide`

**Require it:**

`const _ = require('edgar_sargsyan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(head)`: retrieves the first element from the array
* `tail(tail)`: retrieves every element except the first element of the array
* `middle(middle)`: returns the middle-most element(s)
* `without(without)`: returns a subset of a given array, removing unwanted elements
* `flatten(flatten)`: returns a "flattened" version of the array
* `countOnly(countOnly)`: returns a proper report on all the strings found in the input array, and their respective counts
* `countLetters(countLetters)`: returns an object where property/key should be the number of occurrences for the string character
* `letterPositions(letterPositions)`: returns all the indices (zero-based positions) in the string where each character is found
* `findKeyByValue(findKeyByValue)`:  returns the first key which contains the given value
* `map(map)`: returns a new array based on the results of the callback function
* `takeUntil(takeUntil)`: returns a "slice of the array with elements taken from the beginning
* `findKey(findKey)`: returns the first key for which the callback returns a truthy value
* `assertArraysEqual(assertEqual)`: Takes in two arrays and logs in the console log to see if they are the same. return it is falsy or true
* `assertEqual(assertEqual)`: Takes in two elements that aren't Objects or arrays to check and return the result of if they are identical
* `assertObjectsEqual(assertObjectsEqual)`: Takes in two objects and logs in the console log to check and return the result of if they are identical