// Write a function that reverses a string.
// Take a string as input, reverse the string, and return the new string.

const reverseString = (str) => {
    if (str === '') {
        return ''
    }
    const newChar = str[0]
    return reverseString(str.slice(1)) + newChar
}

console.log(reverseString('sidekick'))