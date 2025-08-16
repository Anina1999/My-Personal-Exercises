function mergeObjects(obj1, obj2) {
    let mergedObj = { ...obj1 };

    for (let key in obj2) {
        mergedObj[key] = obj2[key];
    }

    return mergedObj;
}

console.log(mergeObjects(
  { a: 1, b: 2, c: 3 },
  { b: 4, d: 5 }
));
