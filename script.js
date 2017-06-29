var keys = document.querySelectorAll("#calculator-body");
var operators = ['+','-','*','÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e){
        var input = document.querySelector('.readout');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if(btnVal == 'c'){
            input.innerHTML = '';
            decimalAdded = false;
        }
        else if (btnVal =='='){
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];
            equation = equation.replace(/÷/g,'/');
        if(equation)
            input.innerHTML = eval(equation);

            decimalAdded = false;
        }
        else if (operators.indexOf(btnVal)> -1){
            var lastChar = inputVal[inputVal.length - 1];
        if(inputVal != ''&& operators.indexOf(lastChar) == -1)
            equation = equation(equation);
            decimalAdded = false;
        }
        else if(operators.indexOf(btnVal) > -1) {
            var lastChar = inputVal[inputVal.length - 1];

        if(inputVal != '' && operators.indexOf(lastChar) == -1)
            input.innerHTML += btnVal;

        else if(inputVal == '' && btnVal == '-')
            input.innerHTML += btnVal;

        if(operators.indexOf(lastChar)> -1 && inputVal.length > 1){
            input.innerHTML = inputVal.replace(/.$/,btnVal);
        }

        decimalAdded = false;
    }
    else if(operators.indexOf(btnVal)> -1) {
        var lastChar = inputVal[inputVal.length - 1];

        if(inputVal != '' && operators.indexOf(lastChar) == -1)
            input.innerHTML += btnVal;

            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal

            if(operators.indexOf(lastChar)> -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace()
            }
    }
    }
}