//solve #1 (works for current keys)
function convertObjectToArray(obj) {
    let array = [];
    array.push("name: " + obj.name);
    array.push("age: " + obj.age);
    array.push("city: " + obj.city);

    return array;
}

console.log(objectToArray({ name: "John", age: 30, city: "Sofia" }));


//solve #2 (better one works with other keys)
function objectToArray(obj) {
    let array = [];

    for (let key in obj) {
        array.push(key + ": " + obj[key]);
    }

    return array;
}
