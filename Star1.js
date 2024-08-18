// function Star1(lineCount){
//     for(let i = 0; i<=lineCount-1; i++){
//         console.log(" ".repeat(lineCount-i) + "*".repeat(i+1));

// }
// }
// Star1(5);

// num = 5
// value= "*"
// for(let i = 1; 1<= num; i++){
//     if(i<= num/2){
//         console.log(value.repeat(i))
//     }
//     else{
//         console.log(value.repeat(num-(i-1)))
//     }
// }

// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r1.question('Enter the Character', (value) => {
//     r1.question('Enter the n times', (n) =>{
//         for(let i = 1; i <= n; i++){
//             console.log(' '.repeat(n-i) + value.repeat(i));
//         }
//         for(let i = n-1; i >= 1; i--){
//             console.log(' '.repeat(n-i) + value.repeat(i));
//         }
//         r1.close();
//     })
// })
/*
Enter the n times 5
 $        
 $ $      
 $ $ $    
 $ $ $ $  
 $ $ $ $ $
 $ $ $ $  
 $ $ $    
 $ $      
 $   
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


r1.question("Enter the Characther", (value) => {
    r1.question("Enter the n times", (max_num) => {
        for(let increment = 1; increment <= max_num + 5; increment++){
            if(increment <= 5){
                console.log(value.repeat(increment));

                
            }
            else if (increment >=5 && increment < 10) {
                console.log(value.repeat(10 - increment));
            }
        }
        r1.close();
    });
});

*/

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Enter the  Charater", (value) => {
  interface.question("Enter the n Times", (max_num) => {
    for (let increment = 0; increment < max_num; increment++) {
      console.log(
        value.repeat(max_num - increment) +
          " ".repeat(increment) +
          " ".repeat(increment) +
          value.repeat(max_num - increment)
      );
    }
    for (let increment = max_num - 2; increment >= 0; increment--) {
      console.log(
        value.repeat(max_num - increment) +
          " ".repeat(increment) +
          " ".repeat(increment) +
          value.repeat(max_num - increment)
      );
    }
    interface.close();
  });
});
