//solve #1 (works for current keys)
function convertObjectToArray(obj) {
    let array = [];
    array.push("name: " + obj.name);
    array.push("age: " + obj.age);
    array.push("city: " + obj.city);

    return array;
}

console.log(objectToArray({ name: "John", age: 30, city: "Sofia" }));
