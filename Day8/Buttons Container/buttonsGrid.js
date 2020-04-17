var btn = document.getElementById("btn5");

var arrayOfButtonGrid = [1,2,3,6,9,8,7,4];

btn.onclick = function() {
    arrayOfButtonGrid.unshift(arrayOfButtonGrid.pop());
    
    document.getElementById("btn1").innerHTML = arrayOfButtonGrid[0];
    document.getElementById("btn2").innerHTML = arrayOfButtonGrid[1];
    document.getElementById("btn3").innerHTML = arrayOfButtonGrid[2];
    document.getElementById("btn6").innerHTML = arrayOfButtonGrid[3];
    document.getElementById("btn9").innerHTML = arrayOfButtonGrid[4];
    document.getElementById("btn8").innerHTML = arrayOfButtonGrid[5];
    document.getElementById("btn7").innerHTML = arrayOfButtonGrid[6];
    document.getElementById("btn4").innerHTML = arrayOfButtonGrid[7];
}