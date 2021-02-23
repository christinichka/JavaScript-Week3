// A. Write a function makeLine(size) that returns a line with exactly size hashes. 
function makeLine(size, char = '#') {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += char;
  }
  return line;
}
console.log('\n' + makeLine(5, '$'));

// B. Write a function called makeSquare(size) that returns a size by size string of hashes - return a single string that contains the entire shape.
function makeSquare(size, char = '#') {
  let square = '';
  for (let i = 0; i < size; i++) {
    square += makeLine(size, char = '#') + '\n';
  }
  return square.slice(0,-1); 
  }
// console.log(makeSquare(5));

// C. Write a function makeRectangle(width, height) that returns a rectangle with the given width and height.
function makeRectangle(width, height, char = '#') {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += makeLine(width, char) + '\n'
  }
  return rectangle;
}
console.log(makeRectangle(5 ,5, '%'));

// D. Rewrite makeSquare to use makeRectangle.
function makeSquare(size, char = '#') {
  let square = makeRectangle(size, size, char);
  return square; 
  }
console.log('\n' + makeSquare(4, '*'));

// E. Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. 
function makeDownwardStairs(height, char = '#') {
  let downwardStairs = '';
  for (let i = 0; i < height; i++) {
    downwardStairs += makeLine(i+1, char) + '\n'
  }
  return downwardStairs.slice(0,-1);
}
console.log('\n' + makeDownwardStairs(5, '+'));

// F. Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.

// ***My original code
// function makeSpaceLine(numSpaces, numChars) {
//   let makeSpaceLine = '';

//   for (let i = 0; i < numChars; i++) {
//     makeSpaceLine += " ".repeat(3) + makeLine(numSpaces) + " ".repeat(3);
//   }
//   return makeSpaceLine
// }
// console.log(makeSpaceLine(5, 1));

// Another way to make a space then a line
function makeSpaceLine(numSpaces, numChars, char = '#') {
  let makeSpaceLine = " ".repeat(numSpaces) + makeLine(numChars, char) + " ".repeat(numSpaces);
  return makeSpaceLine
}
console.log('\n' + makeSpaceLine(3, 5, '~'))

// G. Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.

// ***My Isosceles Triangle fuction
// function makeIsoscelesTriangle(height) {
//   for (let i = 0; i < height; i++) {
//     let isotriangle = '';
//     for (let j = 1; j < height-i; j++) {
//       isotriangle = isotriangle + ' ';
//     }
//     for (let k = 1; k <= (2*i+1); k++) {
//       isotriangle = isotriangle + '#';
//     }
//     console.log(isotriangle);
//   }
  // return makeIsoscelesTriangle
// }
// console.log(makeIsoscelesTriangle(5));

// LaunchCode's Isosceles Triangle function
function makeIsoscelesTriangle(height, char = '#') {
   let triangle = '';
   for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1, char) + '\n');
   }
   return triangle.slice(0, -1);
}
console.log('\n' +makeIsoscelesTriangle(5, '&'));


// H. Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
function makeDiamond(height, char = '#') {
  return diamond = makeIsoscelesTriangle(height, char) + '\n' + makeIsoscelesTriangle(height, char).split('').reverse().join('');
  }
console.log('\n' +makeDiamond(5, '^'));


// Bonus Mission 
// Refactor your functions so that they take a single character as a parameter, and draw the shapes with that character instead of always using '#'. Make the new parameter optional, with default value '#'.

