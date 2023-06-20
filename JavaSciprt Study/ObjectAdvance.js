let arr1 = [1, 2, 3];
console.log(arr1.length)
console.log(arr1.push(4));
console.log(arr1);

let Food = ["짜장면", "치킨", "피자"];

for (let i = 0 ; i < Food.length ; i++){
    console.log(Food[i]);
}

for (let item of Food){
    console.log(item);
}

let Person = {
    name : "Ilium",
    age : 28,
    company : "Goorm"
}

for (let item of Object.keys(Person)){
    console.log(Person[item])
}

for (let item of Object.values(Person)){
    console.log(item)
}