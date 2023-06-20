let Person = {
    name : "Ilium",
    age : 28,
    sayHi : function(){
        console.log("HI");
    },
    add : function(a, b){
        console.log(a+b);
    }
}

delete Person.age;

console.log("age" in Person);
console.log(Person.sayHi);
Person.sayHi();
Person.add(3, 5);