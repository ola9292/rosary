let count = 0;
let scoreEl = document.getElementById('score-el')
let displayEntry = document.getElementById('display-entry')
console.log(count)
function increment(){
    count = count + 1;
    scoreEl.innerHTML = count                                                     
}

function save(){
    newCount = count + " - "
    displayEntry.textContent = displayEntry.textContent + newCount;
    count = 0;
    scoreEl.innerHTML = count
}