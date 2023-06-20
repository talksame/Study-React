//stack
let stack = [1, 2, 3]

stack.push(3)
stack.push(4)

console.log(stack.pop())

//queue
let queue = [1, 2, 3]

queue.unshift(4)
queue.unshift(5)
console.log(queue.shift())


//slice
let arr1 = [1, 2, 3, 4]
console.log(arr1.slice(0, 2));

//concat
let arr2 = [5, 6]
let arr3 = arr1.concat(arr2)
console.log(arr3);

//foreach == mapping
arr3.forEach((item, idx) => {
    console.log(item, idx + 1);
})