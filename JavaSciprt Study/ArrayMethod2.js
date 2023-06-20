let arr1 = [1, 2, 3, 4]
let Newarr1 = arr1.map((item) => item * 2)
console.log(Newarr1)


let arr2 = [
    {name : "Ilium", age : 28},
    {name : "Kundal", age : 28},
    {name : "Wooyoung", age : 23},
    {name : "talksame", age : 26}
    
]

console.log(arr2.findIndex((item) => item.age === 28))
console.log(arr2.find((item) => item.age === 28))

console.log(arr2.filter((item) => item.age == 28))

let arr3 = [4, 2, 3, 1]
function Compare(a, b){
    if (a > b){
        return -1
    } else if ( a < b){
        return 1
    }else{
        return 0
    }
}
arr3.sort(Compare)
console.log(arr3)