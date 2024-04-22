let btns = document.querySelectorAll('button');
let output = document.querySelector('#output');
let error = document.querySelector('#error');

for(let t of btns){
    t.addEventListener("click", () => performCount(t));
}

let count = 0;

function performCount(btnClicked) {
    let selectedValue = btnClicked.innerText;

    if (selectedValue === 'Decrement') {
        if (count > 0) {
            count--;
        } else {
            error.innerHTML = "Error: Cannot go below 0";
            error.style.color = 'red'; 
        }
    } else if (selectedValue === 'Increment') {
        count++;
    } else if (selectedValue === 'Clear') {
        count = 0;
    }

    output.innerHTML = `Your Current Count is : ${count}`;
}
