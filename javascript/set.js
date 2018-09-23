// The Set object lets you store unique values of any type, whether primitive values or object references
const set1 = new Set([1, 2, 3, 4, 5]);

// converting between Set and Array
mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
[...mySet2]; // [1, 2, 3, 4]

// convert Set object to an Array object, with Array.from
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]


// Iterate set entries with forEach
mySet.forEach(function(value) {
  console.log(value);
});

mySet.add(o);

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed
mySet.size; // 4, we just removed one value


// intersect can be simulated via
var intersection = new Set([...set1].filter(x => set2.has(x)));

// difference can be simulated via
var difference = new Set([...set1].filter(x => !set2.has(x)));

