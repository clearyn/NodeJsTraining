//Example Object
const person = {
    name : 'Max',
    age : '29',
    greet() {
        console.log('Hi iam ' + this.name + ' my age is ' + this.age);
    }
};

//deep structuring obj
const printName = ({name, age}) => {
    console.log(name, age);
}

printName(person);

const {name, age} = person;
console.log(name, age);

//Example array
const hobbies = ['Sports', 'Cooking'];

//deep structuring array
const {hobby1, hobby2} = hobbies;
console.log(hobby1, hobby2);