//removing element from the back
// var nums = [1,2,3,4,5];

// var popped = nums.pop();
// console.log(popped);
// console.log(nums);


// reomving element front
//removing  element the middle
//removing element index
//removing element by value

 var nums = [1,2,3,4,5];

// for(var i = 0; i< nums.length; i++){
//     nums[i] = nums[i +1]
// }

// console.log(nums)
// nums.length = nums.length -1

// console.log(nums)


// var remover = nums.shift()

// console.log(remover)


// function rotate (arr, times){
//     for(var i = 1; i <= times; ++i){
//         var poped_value = nums.pop()
//         nums = [poped_value, ...nums]
//     }
//     return nums;
// }
// console.log(rotate(nums, 1))



var num = [1,2,3,4,5,6,7,8,9];

function pop(arr) {
    var poped_value = arr [arr.length - 1];
    for(var i = arr.length -1 ; i > 0; i --){
        console.log(arr, "before")
        arr[i] = arr[i -1]
        console.log(arr, 'After')
    }

    arr = arr.slice(1,)
    return [arr, poped_value]
}

function rotate(nums, times) {
    times = times % nums.length
    if(!times) {
        return nums
    }
    for (var i = 1; i <= times; ++i){
        return_value = pop(nums)
        poped_value = return_value[1]
        array_after_popping = return_value[0]
        console.log(poped_value, array_after_popping)
        nums = [poped_value, ...array_after_popping]
        console.log(`Array after rotation ${i} : ${nums}`)
    }
    return nums;
}


console.log(rotate(nums, 9))