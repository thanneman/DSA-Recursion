// You have entered a Maze and need to find your way out of it.
// There are more than one possible paths through the Maze to the single exit point.
// Write a recursive function that will help you find a possible path though the maze.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const solveMaze = function(row, column, directions, maze){

    if (maze[row][column] == 'e'){
     return directions
   }
   
  
   if (column < maze[0].length - 1 && maze[row][column + 1] != ('*')){
     maze[row][column] = '*'
     let newColumn = column + 1
     let newRow = row
     return directions = 'R' + solveMaze(newRow, newColumn, directions, maze)
 
   }  
     
   if (row < maze.length - 1 && maze[row  + 1][column] != ('*')){
     maze[row][column] = '*'
     let newColumn = column
     let newRow = row + 1
     return directions = 'D' + solveMaze(newRow, newColumn, directions, maze)
   }  
     
  if (column > 0 && maze[row][column - 1] != ('*')){
     maze[row][column] = '*'
     let newColumn = column - 1
     let newRow = row
     return directions = 'L' + solveMaze(newRow, newColumn, directions, maze)
 
   }
     
    if (row > 0 && maze[row - 1][column] != ('*')){
     maze[row][column] = '*'
     let newColumn = column
     let newRow = row - 1
     return directions = 'U' + solveMaze(newRow, newColumn, directions, maze)
   }    
 }