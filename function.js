function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello, Reeba!")); 

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

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

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

// Example usage
console.log(factorial(5)); // Output: 120

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("Hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
