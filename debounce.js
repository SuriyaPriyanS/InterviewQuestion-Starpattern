function debounce(fun , delay){
    let timeoutId;

    return function(...args){
        if(timeoutId ) clearTimeout(timeoutId);

        timeoutId = setTimeout(()=> {
            fun.apply(this, args)
        }, delay);


    }
};

function search(query){
    console.log(`Searching for`, query);

}

const debounceSearch = debounce(search, 2000);

debounceSearch('apple');
debounceSearch("apple eatting");
debounceSearch("apple eatting human ");