function countWords(words) {
    let wordsObject = {};

    for (let i = 0; i < words.length; i++) {
        let currentIndex = words[i];
        let count = 1;

        if (!wordsObject[currentIndex]) {
            wordsObject[currentIndex] = count;
        } else {
            wordsObject[currentIndex] += count;
        }
    }

    return wordsObject;
}

console.log(countWords(["apple", "banana", "apple", "orange", "banana", "apple"]));
