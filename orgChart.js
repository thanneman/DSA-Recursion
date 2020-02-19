// Write a recursive function that prints the following organization chart.
// Your output should be as shown below with proper indentation to show the hierarchy.
// You may store the org chart in an object and send that as an input to your program.

function orgChart(input, multiplier = 0) {
    const keys = Object.keys(input)
    const next = input[keys[0]]
    if (typeof(next) === 'string') {
        input.forEach(x => console.log('\t'.repeat(multiplier) + x))
    } else {
        keys.forEach(k => {
            console.log('\t'.repeat(multiplier) + k)
            orgChart(input[k], multiplier + 1)
        })
    
    }

}

let input = {Zuckerberg: {
Schroepfer: {Bosworth: ['Steve', 'Kyle', 'Andra'], Zhao: ['Richie', 'Sofia', 'Jen']},
Schrage :
    {VanDyck:
        ['Sabrina',
        'Michelle',
        'Josh'],
    Swain:
        ['Blanch',
        'Tom',
        'Joe']},
Sandberg:{
    Goler:
        ['Eddie',
        'Julie',
        'Annie'],
   Hernandez:[
        'Rowi',
        'Inga',
        'Morgan'],
   Moissinac:
        ['Amy',
        'Chuck',
        'Vinni'],
   Kelley:
        ['Eric',
        'Ana',
        'Wes']},
}
}

orgChart(input)