const numbers = [1, 2, 3, 4, 5];

function squareArray(arr) {
    return arr.map(num => num * num);
}

console.log(squareArray(numbers));