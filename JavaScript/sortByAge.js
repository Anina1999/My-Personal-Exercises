//manipulating array of objects

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}

const people = [
    { name: "Anna", age: 28 },
    { name: "George", age: 19 },
    { name: "Maria", age: 24 }
];

const sortedPeople = sortByAge(people);
console.log(sortedPeople);
