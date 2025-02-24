function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString("Hello, Reeba!")); // Output: "!abeeR ,olleH"

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Example usage
console.log(getRandomHexColor()); // Output: e.g. "#3a5ef2"

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Example usage
console.log(capitalizeWords("hello reeba, good luck!")); // Output: "Hello Reeba, Good Luck!"

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

// Example usage
console.log(factorial(5)); // Output: 120
