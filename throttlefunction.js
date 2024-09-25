function throttle(fun, delay){
    let lastcall = 0;

    return function(...args){
        const now = new Date().getTime();
        if(now - lastcall >= delay){
            lastcall = now;
            fun.apply(this, args);
        }

    }


}

function onResezie() {
    console.log("Window resized", new Date().toLocaleTimeString());

}

const throttledResize = throttle(onReseize, 5000);

window.addEventListener('resize', throttledResize);