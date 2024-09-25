function rotateArrays(arr, k){
    k = k % arr.length;

    reverse(arr, 0, arr.length -1); 
    //

    reverse(arr, 0, k-1)
    // resever the remaining elements

    reverse(arr, k, arr.length -1)
     return arr;
}

function reverse(arr, start, end){
    if(start < end){
        //swep
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

console.log(rotateArrays([1,2,3,4,5], 4));
