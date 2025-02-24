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
