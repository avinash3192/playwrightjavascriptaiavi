let numbers = [100, 25, 3, 50, 8];

numbers.sort();

console.log(numbers);

//The default sort() method converts numbers into strings and then sorts them alphabetically (lexicographically) instead of numerically.

//Why does this happen?

//Internally, JavaScript compares the numbers as strings:

// 100  → "100"
// 25   → "25"
// 3    → "3"
// 50   → "50"
// 8    → "8"

// Now it sorts alphabetically:

// "100"
// "25"
// "3"
// "50"
// "8"

// Because:

// "1" comes before "2"
// "2" comes before "3"
// "3" comes before "5"
// "5" comes before "8"

// So the result is:

// [100, 25, 3, 50, 8]

// Correct way to sort numbers

// Pass a compare function to sort().

// Ascending order
// let numbers = [100, 25, 3, 50, 8];

// numbers.sort((a, b) => a - b);

// console.log(numbers);

// Output

// [3, 8, 25, 50, 100]
// Descending order
// let numbers = [100, 25, 3, 50, 8];

// numbers.sort((a, b) => b - a);

// console.log(numbers);

// Output

// [100, 50, 25, 8, 3]
// How does (a, b) => a - b work?

// Suppose the array is:

// [25, 8]

// JavaScript compares the two numbers.

// a = 25
// b = 8

// a - b = 17

// Since the result is positive, 25 should come after 8.

// Now compare:

// a = 8
// b = 25

// a - b = -17

// Since the result is negative, 8 should come before 25.

// Rules
// Compare Function Result	Meaning
// Negative (< 0)	a comes before b
// Positive (> 0)	a comes after b
// Zero (0)	Keep their current order