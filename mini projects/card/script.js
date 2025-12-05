var grow = 0;
let btn = document.querySelector('.button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');





btn. addEventListener("click", function(){
    btn.style.pointerEvents = 'none'

    var int = setInterval(() => {
        grow++ 

        h2.innerHTML = grow+'%'
        inner.style.width = grow+ '%'

    }, 50);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
        // btn.style.pointerEvents = 'none'
        
    }, 5000);

})

