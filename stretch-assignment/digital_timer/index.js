
let seconds = 0;
let milSec = 0;

const timer = function(){

    if(milSec >= 10000){
        clearInterval(interval)
        document.querySelectorAll('.digits').forEach(item => {item.className = 'redDigit';})
    } else {
        milSec += 10;
        
    }

    
    let milString = milSec.toString().padStart(5, '0')

    document.querySelector('#msTens').textContent = milString[3]
    document.querySelector('#msHundreds').textContent = milString[2]
    document.querySelector('#secondOnes').textContent = milString[1]
    document.querySelector('#secondTens').textContent = milString[0]

    // console.log(milSec);
}

let interval = setInterval(timer, 10);






