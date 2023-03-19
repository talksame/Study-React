### React를 위한 ES6, Javascript



#### 변수 선언

``` javascript
let name1 = 'ilium';
const name2 = 'ilium';

console.log(name1); //ilium
console.log(name2); //ilium
name1 = 'ilium2';
```



### 화살표 함수

```javascript
const myFnc =() =>{
    console.log("myFnc")
}
```

```javascript
const printName = (name) => {
    console.log(name);
}

printName('Ilium'); //ilium
```

```javascript
const mutiply = (number) => {
    return number * 2;
}
console.log(mutiply(2)); // 4
```



### classes

```javascript
class Person{
    constructor(){
        this.name = 'max';
    }
    printMyname(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname(): // max

```

```javascript
class Humane(){
    constructor(){
        this.gender = 'male';
    }
    printGenter(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super(); // 상속받은 클래스를 받아오는 옴
        this.name = 'max';
    }
    printMyname(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname(): // max
person.printGender();
```





### 클래스, 상속, 메소드

 ```javascript
 class Humane(){
     // this 문구 삭제, 화살표 함수 적극 사용
     gender = 'male';
     printGenter = () => {
         console.log(this.gender);
     }
 }
 
 class Person extends Human{
     name = 'Ilium';
     gender = "Female"
     printMyname = () =>{
         console.log(this.name);
     }
 }
 
 const person = new Person();
 person.printMyname();
 person.printGender();
 ```



### Spread & Rest

```javascript
//Spread
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4];


//Rest
const filter = (...args) =>{
    return args.filter(el => el === 1);
}

```



### Destructuring

```javascript
const numbers = [1, 2, 3];
// 배열에서 요소 추출
[num1, num2] = numbers;
[num1, ,num2] = numbers;
```



### Reference, Data Types

```javascript
const person = {
    name : 'Max'
};

// 주소복사
const secondPerson = person;
person.name = 'Manu';
console.log(secondPerson); //Manu

// 프로퍼티 복사
const ThirdPerson = {
    ...person;
}
person.name = 'Manu';
console.log(secondPerson); //Max
```



### map

```javascript
const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) =>{
    return num*2;
});
console.log(numbers); // 1, 2, 3
console.log(doubleNumArray); // 2, 4, 6
```



