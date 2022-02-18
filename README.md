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

* `head(arr)`: Takes in an array and returns the first element in the array.
* `tail(arr)`: Takes in an array and returns everything except the first element of the array.
* `middle(arr)`: Takes in an array and returns middle most element of the array.
* `without(source, itemsToRemove)`: Takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
* `flatten(arr)`: Takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `countOnly(allItems, itemsToCount)`: Takes in a collection of items and returns a specific subset of those items.
* `countLetters(string)`: Takes in a sentence and returns a count of each of the letters in the sentence.
* `letterPositions(string)`: Takes in a string and returns all indices of letter positions in the string.
* `findKeyByValue(obj, val)`: Takes in an object and a value and returns the first key that corresponds to that value.
* `map(array, callback)`: Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* `takeUntil(array, callback)`: Takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* `findKey(obj, callback)`: Takes in an object and callback and returns the first key that meets the criteria specified in callback.
* `assertArraysEqual(actual, expected)`: Takes in 2 arrays and returns true if they are equal and false otherwise.
* `assertEqual(actual, expected)`: Takes in 2 values and returns true if they are equal and false otherwise 
* `eqObjects(actual, expected)` : Takes in 2 objects and return true if they are equal and false otherwise.
* `assertObjectsEqual((actual, expected)`: Takes in two objects and logs in the console log to check and return the result of if they are identical