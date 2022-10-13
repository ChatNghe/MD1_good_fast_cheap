/* JavaScript */
let good = document.getElementById('good'),
    fast = document.getElementById('fast'),
    cheap = document.getElementById('cheap');

function changed(el){
    isGood = good.checked;
    isFast = fast.checked;
    isCheap = cheap.checked;

    if(isGood && isFast && isCheap && el == cheap){
        fast.checked = false;
    }
    if(isGood && isCheap && isFast && el == fast){
        good.checked = false;
    }
    if(isCheap && isFast && isGood && el == good){
        cheap.checked = false;
    }

}