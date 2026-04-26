function modifyArray(arr) {
    arr.push("NewElement");
    arr.pop();             
    return arr;
}

console.log(modifyArray([1, 2, 3]));