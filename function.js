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
