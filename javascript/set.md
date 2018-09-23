1. Структура данных Set

# Set

- [Array vs Set vs Map vs Object — Real-time use cases in Javascript ES6](https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b)
- [Mozilla - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

```js
// JavaScript Hint
// The Set object lets you store unique values of any type, whether primitive values or object references
let mySet = new Set([1, {}, [], 4, '5'])

// converting between Set and Array
mySet = new Set([1, 2, 3, 4])
mySet.size // 4
[...mySet], Array.from(mySet) // [1, 2, 3, 4]

// Iterate set entries with forEach
mySet.forEach((n) => console.log(n))

// API ...
mySet.add(o)
mySet.delete(5)
mySet.has(5) // ?
mySet.size
```
---

# Task

Как с помощью Set и filter реализовать
- intersect
- difference
?

---

# Example

```js
var intersection = new Set([...set1]
	.filter(x => set2.has(x)))

var difference = new Set([...set1]
	.filter(x => !set2.has(x)))
```
