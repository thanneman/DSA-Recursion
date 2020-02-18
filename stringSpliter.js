// Write a recursive function that splits a string based
// on a separator (similar to String.prototype.split).
// Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

function stringSplitter(string, splitter) {
    if (string.indexOf(splitter) === -1) {
        return [string.slice(0, string.length)]
    }
    return [string.slice(0, string.indexOf(splitter)), ...stringSplitter(string.slice(string.indexOf(splitter) + 1), splitter)]
}

console.log(stringSplitter('02/20/2020', '/'))