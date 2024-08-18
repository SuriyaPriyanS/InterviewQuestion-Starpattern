/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the character', (value)=>{
    rl.question('Enter the n times', (n)=>{
        for(let i = 0; i<=n; i++){
            console.log(" ".repeat(n-i)+ value.repeat(i));
        }
        rl.close();
    })
})
*/


// n = 4
// horizontal => n *2
// vertical lines = n + 1



const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question('Enter the character ', (value)=> {
    interface.question('Enter the n times', (max_num)=> {
        for(let increment = max_num; increment>0 ; increment --){
            console.log(" ".repeat(increment) + value.repeat(max_num - increment + 1)+
             value.repeat(max_num- increment));

        }
        for(let increment = 1 ; increment <=max_num ; increment++) {
            console.log(" ".repeat(increment)+ value.repeat(max_num-increment+1)+
             value.repeat(max_num-increment));
        }
        interface.close();
    })
})