/* 4) Define a function with one parameter, which will be a string. The function must do the following:
a) Have a clear, descriptive name.
b) Retrieve only the last character from strings with lengths of 3 or less.
c) Retrieve only the first 3 characters from strings with lengths larger than 3. 
d) Use a template literal to return the phrase, "We put the '___' in '___'." Fill the first blank with the modified string, and fill the second blank
with the original string.
*/
let str = 'Functions rock'

function funPhrase(str) {
  let modifiedString = '';

  for (let i = 0; i < str.length; i++) {
    if (str.length <= 3) {
      modifiedString = str.CharAt(str.length-1);
    } else {
      modifiedString = str.substring(0,3);
  }
  return `We put the ${modifiedString} in ${str}.`;
  }
}
funPhrase(str);

/* Now test your function:
e) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
*/
