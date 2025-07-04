//algorithm for character count
const sentence = "My name is chris.";
let sentenceLength = 0;
alert(`${sentence} the character count in sentence is, ${sentence.length}`);

//algorithm for word count
const string = "My name is kris, and i am loving javascript so far.";
const word = string.split(" ");
alert(`${string} the word count in sentence is, ${word.length}`);
// mathematical functions
// function for prime numbers
function prime() {
  const num = parseInt(prompt("enter number"));
  let i = 2;
  if (num <= 1) {
    alert("enter number greater that 2");
  } else if (num >= 2 && num % i == 0) {
    alert(`${num} is a prime`);
  } else {
    alert(`${num} is not a prime number`);
  }
}

//function to find factorial
// function factorial() {
//   let num = parseInt(prompt("enter for factorial calculation"));
//   let result = 0;
//   if (num === 0 || num === 1) alert("is 1");
//   for (let i = 0; i <= num; i++) {
//     result = num * i;
//     const thefactorial = result ;

//     alert(thefactorial);
//   }
// }
