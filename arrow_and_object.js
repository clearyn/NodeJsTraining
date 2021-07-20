let name = 'Max';
let age = 29;
let hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies ' +
        userHasHobby
    );
}

//Function with 1 only return statement
const add = (a, b) => a + b;
//Function with 1 parameter and one only return statement
const addOne = a => a + 1;
//Function with no parameter
const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(3, 1));
console.log(addOne(1));
console.log(addRandom());

//Object
const person = {
    name : 'Max',
    age : '29',
    greet() {
        console.log('Hi iam ' + this.name + ' my age is ' + this.age);
    }
};

person.greet();