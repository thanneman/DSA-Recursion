// An anagram is any word or phrase that uses the letters of a given ("subject")
// word or phrase in another, rearranged order. Write a function that creates an anagram list,
// listing all the rearrangements of a given word. For example, if the user types "east",
// the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

function anagrams(word) {
    let possibilites = [];
    if (word.length === 1) {
        return word
    } else {
        for(let i = 0; i < word.length; i++) {
            newWords = anagrams(word.substring(0, i) + word.substring(i+1))
            for(let j = 0; j < newWords.length; j++) {
                possibilites.push(word[i] + newWords[j])
            }
        }
    }
    return possibilites
}

console.log(anagrams('east'))