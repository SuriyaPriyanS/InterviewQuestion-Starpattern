// const obj = {
//     name: "John",
//     age: 30,
//     job: "Software Engineer",
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         zip: "10001"

//     },
//     hobbies: ["reading", "painting", "cooking"],
//     family: {
//         parents: {
//             father: {
//                 name: "Jane Doe",
//                 age: 60
//             },
//             mother: {
//                 name: "Alice Smith",
//                 age: 58
//             }
//         },
//         siblings: [
//             {
//                 name: "Bob Johnson",
//                 age: 28
//             },
//             {
//                 name: "Emily Davis",
//                 age: 26
//             }
//         ]
//     },

// // };

// // const cloneobj = {...obj};
// // obj.address.city = "Amercian";
// // obj.hobbies.push("Swimming");

// // console.log(obj.address.city);

// // console.log(cloneobj.address.city);
// // console.log(obj.hobbies);

// // console.log(cloneobj.hobbies);

function deepclone(obj){
    if(obj == null || typeof obj !== 'object'){
        return obj;
    }
    if(Array.isArray(obj)){
        const arrcopy = [];
        for(let i = 0; i< obj.length; i++){
            arrcopy[i] = deepclone(obj[i]);
        }
        return arrcopy;
        
    }
    //handle ogject case
    const objcopy = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            objcopy[key] = deepclone(obj[key]);
        }
}
    return objcopy;
}
const obj = {
    name: "John",
    age: 30,
    job: "Software Engineer",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
},
    hobbies: ["reading", "painting", "cooking"],
    family: {
        parents: {
            father: {
                name: "Jane Doe",
                age: 60
            },
            mother: {
                name: "Alice Smith",
                age: 58
            }
        },
        siblings: [
            {
                name: "Bob Johnson",
                age: 28
            },
            {
                name: "Emily Davis",
                age: 26
            }
        ]
    }
};

const cloneobj = deepclone(obj);

obj.address.city = "Amercian";

obj.hobbies.push("Swimming");

console.log(obj.address.city);

console.log(cloneobj.address.city);

console.log(obj.hobbies);

console.log(cloneobj.hobbies);