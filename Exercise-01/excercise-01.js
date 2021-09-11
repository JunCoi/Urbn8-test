const sum = (arr) => {
    if (arr.length < 1) return 0;
    return arr.pop() + sum(arr);
};

console.log(sum([5,9,6,8,4,6]));