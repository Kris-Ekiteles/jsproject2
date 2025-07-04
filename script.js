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
// function prime() {
//   const number = parseInt(prompt("enter a positive number"));
//   let isPrime = true;
//   if (number <= 1) {
//     alert("please enter a value greater than 2");
//   } else if (number > 1) {
//     for (let i = 2; i <= number / 2; i++) {
//       if (number % i == 0) {
//         isPrime = false;
//         alert(`{number} is a prime number`);
//         break;
//       }
//     }
//   } else {
//     alert(`${number} is not a prime number`);
//   }
// }
// function prime(){
// const num= parseInt(prompt('enter a number'))

// let i=2;
// if (num<=1){
//     alert('enter a number greater than 1')
// }
// else if(num>1)
// }
function prime() {
  const num = parseInt(prompt("enter number"));
  let i = 2;
  if (num <= 1) {
    alert("enter number greater that 2");
  } else if (num >= 2 && num % i == 0) {
    alert(`${number} is a prime`);
  } else {
    alert(`${number}is not a prime number`);
  }
}
