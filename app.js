const allButtons = document.querySelectorAll("[data-val]"); // [] = used for selecting HTML attributes, similar to . and #
const screen = document.querySelector(".screen");

let currentScreenValue = "";


allButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (button.dataset.val === "C") {

            currentScreenValue = "";
            screen.value = currentScreenValue;
            return;
        }

        if (button.dataset.val === "D") {

            currentScreenValue = currentScreenValue.slice(0, -1);
            screen.value = currentScreenValue;
            return; 
        }

        if (button.dataset.val === "=") {

            if(currentScreenValue === "") return;

            try {
                let result = Function(`"use strict"; return (${currentScreenValue})`)();
            

            if (result === Infinity || isNaN(result)) {
                screen.value = "Error";
                currentScreenValue = "";
                return;
            }

            result = Number( Math.round(result + "e8") + "e-8");
            screen.value = result;
            currentScreenValue = String(result);
        }  catch (error) {
            screen.value = "Syntax Error";
            currentScreenValue = "";
        }
        return;
    }
        currentScreenValue += button.dataset.val;
        screen.value = currentScreenValue;
    })
})