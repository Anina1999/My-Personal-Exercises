function processString(str) {
    const words = str.split(' ');
    const uniqueWords = new Set();
    let longestWord = '';

    for (const word of words) {
        uniqueWords.add(word);

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return {
        wordCount: words.length,
        uniqueWords: Array.from(uniqueWords),
        longestWord
    };
}

console.log(processString("JavaScript is great and JavaScript is powerful"));
