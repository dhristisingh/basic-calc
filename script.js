const displayElement = document.querySelector('.display');
const buttonElements = document.querySelectorAll('.button');

let digits = [];
let operator = '';
let cal = "";
buttonElements.forEach( (button) => {
    button.addEventListener("click" , () =>{
        let clickContent = button.textContent.trim(" ");
        // displayElement.value = cal;
        if(clickContent === '+' || clickContent === "-" || clickContent === '/' || clickContent === "x"){
            digits.push(cal);
            displayElement.value = null;
            operator = clickContent;
            displayElement.value = operator;

            cal = ""
            
        }else if(clickContent === '='){
            if(cal === ''){
                displayElement.value = "not valid button"
                setTimeout(()=> {
                    displayElement.value = "";
                }, 1000);
            }else{
                digits.push(cal)
                cal = ""
            }

        }else {
            cal += Number(button.textContent);
            displayElement.value= cal;
        }

    })
})


const operatorConvert = {
    '+' : function (x,y){return ( Number(x)+Number(y))},
    '-' : function (x,y){return (Number(x)-Number(y))},
    'x' : function (x,y){return (Number(x)*Number(y))},
    '/' : function (x,y){return (Number(x)/Number(y))}
}

const equalsElement = document.querySelector('.equals')

equalsElement.addEventListener("click" , () => {
    let firstNum = digits[0];
    let secondNUm = digits[1];
    let result =  operatorConvert[`${operator}`](firstNum,secondNUm);
    if(result !== NaN){
        displayElement.value = Math.round(result*1000)/1000;
    }else {
        displayElement.value = "Press valid Button"
    }

    digits = [];
})


const windowEl = document.querySelector('html');

windowEl.addEventListener("keydown" , (e) => {
    if(e.key === 'c'){
        operator = '';
        digits = [];
        cal = ""
        displayElement.value = "";
    }
})

