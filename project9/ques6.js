const person = {
    name: "Aanya",
    age: 20,
    occupation: "Student"
};

function greet(p) {
    console.log(`Hello, my name is ${p.name}. I am ${p.age} years old and I am a ${p.occupation}.`);
}

greet(person);