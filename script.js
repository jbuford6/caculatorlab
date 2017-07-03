var keys;
var input = $('#readout');
var btnVal = this.innerHTML;
var operations = {
    add: function(x,y) {
        return x+y;
    }, 
    subtract: function(x,y) {
        return x-y;
    }, 
    multiply: function(x,y) {
        return x*y;
    }, 
    divide: function(x,y) {
        return x/y;
    }
};
var currentNumber = [];
var currentOperation = {
    firstNumber: 0,
    operation: null,
    secondNumber: 0
};
var utils = {
    isNumber: function (num) {
        if (isNaN(num)) {
            return false;
        } else {
            return true;
        }
    },
    isOperator: function (s){
        if (s === "+" || s === '-' || s === '÷' || s === '*' ) {
            return true;
        } 

        return false;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    showNum('0');
    keys = document.getElementById('keys').children;
    keys = Array.prototype.slice.call(keys);
    $('span').on('mousedown', addHighlight);
    $('span').on('mouseup', removeHighlight);
    keys.forEach(function (element) {
        if (element.innerText !== '') {
            element.addEventListener('click', handleInputs);
        }
    });

    var addclass = ' color';


});
function addHighlight() {
    $(this).addClass('color');
}
function removeHighlight() {
    $(this).removeClass('color');
}
function handleInputs(e) {
    var txt = e.target.innerText;

    if (utils.isOperator(txt)) {
        currentOperation.firstNumber = Number(currentNumber.join(''));
        currentOperation.operation = operations[e.target.id];
        currentNumber = [];
        
    }

    if (utils.isNumber(txt)) {
        currentNumber.push(txt);
        input.empty();
        showNum(currentNumber.join(''));
    }

    if (txt == '=') {
        currentOperation.secondNumber = Number(currentNumber.join(''));

        var firstNumber = currentOperation.firstNumber;
        var secondNumber = currentOperation.secondNumber;
        var operation = currentOperation.operation;
        input.empty();
        showNum(operation(firstNumber, secondNumber));
    }

    if (txt === 'c') {
        input.empty();
        currentNumber = [];
        currentOperation = {
            firstNumber: 0,
            operation: null,
            secondNumber: 0
        
        };
        
    }
}
var showNum = function(txt){
    input.append(txt);
};












































































// var keys = document.querySelectorAll("#calculator-body");
// var operators = ['+','-','*','÷'];
// var decimalAdded = false;

// for(var i = 0; i < keys.length; i++) {
//     keys[i].onclick = function(e){
//         var input = document.querySelector('.readout');
//         var inputVal = input.innerHTML;
//         var btnVal = this.innerHTML;

//         if(btnVal == 'c'){
//             input.innerHTML = '';
//             decimalAdded = false;
//         }
//         else if (btnVal =='='){
//             var equation = inputVal;
//             var lastChar = equation[equation.length - 1];
//             equation = equation.replace(/÷/g,'/');
//         if(equation)
//             input.innerHTML = eval(equation);

//             decimalAdded = false;
//         }
//         else if (operators.indexOf(btnVal)> -1){
//             var lastChar = inputVal[inputVal.length - 1];
//         if(inputVal != ''&& operators.indexOf(lastChar) == -1)
//             equation = equation(equation);
//             decimalAdded = false;
//         }
//         else if(operators.indexOf(btnVal) > -1) {
//             var lastChar = inputVal[inputVal.length - 1];

//         if(inputVal != '' && operators.indexOf(lastChar) == -1)
//             input.innerHTML += btnVal;

//         else if(inputVal == '' && btnVal == '-')
//             input.innerHTML += btnVal;

//         if(operators.indexOf(lastChar)> -1 && inputVal.length > 1){
//             input.innerHTML = inputVal.replace(/.$/,btnVal);
//         }

//         decimalAdded = false;
//     }
//     else if(operators.indexOf(btnVal)> -1) {
//         var lastChar = inputVal[inputVal.length - 1];

//         if(inputVal != '' && operators.indexOf(lastChar) == -1)
//             input.innerHTML += btnVal;

//             else if (inputVal == '' && btnVal == '-')
//                 input.innerHTML += btnVal

//             if(operators.indexOf(lastChar)> -1 && inputVal.length > 1) {
//                 input.innerHTML = inputVal.replace(/.$/,btnVal);
//             }

//             decimalAdded = false;
//     }

//         else if (btnVal == '.') {
//             if (!decimalAdded){
//                 input.innerHTML + = btnVal;
//                 decimalAdded = true;
//             }
//         }
//         else {
//             input
//         }
//     }
// }