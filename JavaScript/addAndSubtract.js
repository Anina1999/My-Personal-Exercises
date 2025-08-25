function addAndSubtract(arr) {
    let modifiedArr = [];
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        originalSum += currentValue;

        if (currentValue % 2 === 0) {
            currentValue += i;
        } else {
            currentValue -= i;
        }

        modifiedArr.push(currentValue);
        modifiedSum += currentValue;
    }

    console.log(modifiedArr);
    console.log(originalSum);
    console.log(modifiedSum);
}

//addAndSubtract([5, 15, 23, 56, 35]);
