var res = document.getElementById("res");
var operator = '';
var calcDone = false;

function handleClick(event, element) {
    var val = element.innerHTML;
    if(calcDone) {
        res.innerHTML = "";
    }
    switch(val) {
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/': {
            res.innerHTML = res.innerHTML + val;
            if(val == '+' || val == '-' || val == '*' || val == '/') {
                operator = val;
            }
            break;
        }
        case 'C': {
            res.innerHTML = "";
            operator = "";
            break;
        }
        case '=': {
            var data = res.innerHTML.split(operator);
            var result = eval("" + parseInt(data[0], 2) + operator + parseInt(data[1], 2));
            res.innerHTML = Number(result).toString(2);
            operator = "";
            calcDone = true;
            break;
        }
    }
}