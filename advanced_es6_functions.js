const findMax = (arr) => arr.reduce((max, num) => (num > max ? num : max), arr[0]);
console.log(findMax([10, 25, 6, 78, 3])); 

