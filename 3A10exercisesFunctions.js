// A. Write a function makeLine(size) that returns a line with exactly size hashes. 
function makeLine(size) {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += '#';
  }
  return line;
}
// console.log(makeLine(5));

// B. Write a function called makeSquare(size) that returns a size by size string of hashes - return a single string that contains the entire shape.
function makeSquare(size) {
  let square = '';
  for (let i = 0; i < size; i++) {
    square += makeLine(size) + '\n';
  }
  return square.slice(0,-1); 
  }
// console.log(makeSquare(5));

// C. Write a function makeRectangle(width, height) that returns a rectangle with the given width and height.
function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += makeLine(width) + '\n'
  }
  return rectangle.slice(0,-1);
}
// console.log(makeRectangle(5 ,3));

// D. Rewrite makeSquare to use makeRectangle.
function makeSquare(size) {
  let square = makeRectangle(size, size);
  return square; 
  }
// console.log(makeSquare(5));

// E. Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. 
function makeDownwardStairs(height) {
  let downwardStairs = '';
  for (let i = 0; i < height; i++) {
    downwardStairs += makeLine(i+1) + '\n'
  }
  return downwardStairs.slice(0,-1);
}
// console.log(makeDownwardStairs(5));

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
function makeSpaceLine(numSpaces, numChars) {
  let makeSpaceLine = " ".repeat(numSpaces) + makeLine(numChars) + " ".repeat(numSpaces);
  return makeSpaceLine
}
// console.log(makeSpaceLine(3, 5))

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
function makeIsoscelesTriangle(height) {
   let triangle = '';
   for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
   }
   return triangle.slice(0, -1);
}
// console.log(makeIsoscelesTriangle(5));


// H. Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
function makeDiamond(height) {
  let diamond = '';
  for (let i = 0; i < height; i++) {
    diamond += (makeIsoscelesTriangle(height) + makeIsoscelesTriangle(height).split().reverse().join());
    return diamond
  }
}
console.log(makeDiamond(5));




// Bonus Mission - 
