// 1. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};
function multiply(arr) {
    return arr.reduce((acc, num) => acc * num, 1);
}



// 2. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str) {
    return str.split('').reverse().join('');
}


// 3. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(words, minLength) {
    return words.filter(word => word.length > minLength);
}