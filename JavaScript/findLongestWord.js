function findLongestWord(string) {
    let words = string.split(' ');
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i];
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;
}

//findLongestWord("The quick brown fox jumped over the lazy dog");
