//Setting up initual count value

let count = 0;

// Select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");
/* Selected for each to loop all buttons, added event listener to 
each button as they get clicked, used event object (e) and getting
current target classes for each item (button) */
btns.forEach(function (btn) {
btn.addEventListener("click", function (e) {
const styles = e.currentTarget.classList;
    if(styles.contains ('decrease')) {
        count--;
    } else if (styles.contains ('increase')) {
        count++;
    } else if (styles.contains ('reset')) {
        count = 0;
    }
//Change colors when buttons are clicked
    if (count > 0) {
        value.style.color = 'green';
    } 
    if (count < 0) {
        value.style.color = 'red';
    }
    if (count === 0 ) {
        value.style.color = "#000000";
    }
// Change textContent in the span value 
    value.textContent = count;
    });
});