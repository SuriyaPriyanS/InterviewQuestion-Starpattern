const readline = require('readline');

const interface = readline. createInterface({
    input: process.stdin,
    output: process.stdout
});


// interface.question('Enter the charachter', (value )=> {
//     interface.question('Enter the  n times', (max_num)=> {
//         for(let increment = 1; increment <= max_num; increment++){
//             console.log(" ".repeat(increment) + value.repeat(max_num-increment + 1)+
//             value.repeat(max_num-increment));

//         }
//         interface.close();

// interface.question("Enter the Chraracter ", (value) => {
//     interface.question("Enter the n times", (max_num) => {
//         for(let increment = max_num; increment > 0; increment--){
//             console.log(" ".repeat(increment) + 
//         value.repeat(max_num - increment + 1) + value.repeat(max_num - increment) ); 

//         }
//         interface.close();
//     });
// });
//     })
// })


/*PS D:\Backend\Interview> node .\Star.js
Enter the Chraracter @
Enter the n times 5
     @  
    @@@ 
   @@@@@
  @@@@@@@
 @@@@@@@@@
 */
interface.question("Enter the Chatacter ", (value) => {
    interface.question("Enter the n times", (max_num) => {
        for(let increment = max_num ; increment >= 1; increment--){
            console.log(" ".repeat(increment -1)+ value.repeat(max_num - increment +1) +
            value.repeat(max_num - increment) );
        }
        interface.close();
    });

});
