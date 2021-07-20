//Immutable dont change value of cost instead add new data
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Programming');
console.log(hobbies);

//Example Object
const person = {
    name : 'Max',
    age : '29',
    greet() {
        console.log('Hi iam ' + this.name + ' my age is ' + this.age);
    }
};

//Spread Operator, copy the element and properties(object)
const newObject = {...person};
const newHobbies = [...hobbies];
console.log(person);
console.log(newHobbies);

//Rest operator : take all argument passed to function
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4, 5));