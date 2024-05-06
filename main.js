let mathscore = document.getElementById("mathscore")

let result = document.getElementById("result")

let reset = document.getElementById("reset")

let back = document.getElementById("back")

let divis = document.getElementById("divis")

let multi = document.getElementById("multi")

let seven = document.getElementById("seven")

let eight = document.getElementById("eight")

let nine = document.getElementById("nine")

let minus = document.getElementById("minus")

let four =  document.getElementById("four")

let five = document.getElementById("five")

let six = document.getElementById("six")

let plus = document.getElementById("plus")

let one = document.getElementById("one")

let two = document.getElementById("two")

let three = document.getElementById("three")

let equal = document.getElementById("equal")

let zero = document.getElementById("zero")

let point = document.getElementById("point")


function number(n){
    if(mathscore.innerHTML === "0"){
        mathscore.innerHTML = n.innerHTML;
    } else{
        mathscore.innerHTML += n.innerHTML
    }
}

function operator(n){
    let lastOperator = mathscore.innerHTML.slice(-1);
    if (lastOperator.includes("+", "-", "*", "/")){
        output.innerHTML = mathscore.innerHTML.slice(0,-1) + n.innerHTML;
    } else{
        mathscore.innerHTML += n.innerHTML
    }
}


reset.onclick = function(){
    result.innerHTML = "0";
    mathscore.innerHTML = "";
}

back.onclick = function(){
    mathscore.innerHTML = mathscore.innerHTML(0, -1)
}




one.onclick = function(){
    mathscore.innerHTML += "1";
}

two.onclick = function(){
    mathscore.innerHTML += "2";
}

three.onclick = function(){
    mathscore.innerHTML += "3";
}

four.onclick = function(){
    mathscore.innerHTML += "4";
}

five.onclick = function(){
    mathscore.innerHTML += "5";
}

six.onclick = function(){
    mathscore.innerHTML += "6";
}

seven.onclick = function(){
    mathscore.innerHTML += "7";
}

eight.onclick = function(){
    mathscore.innerHTML += "8";
}

nine.onclick = function(){
    mathscore.innerHTML += "9";
}

zero.onclick = function(){
    mathscore.innerHTML += "0";
}

plus.onclick = function(){
    mathscore.innerHTML += "+";
}

multi.onclick = function(){
    mathscore.innerHTML += "*";
}

minus.onclick = function(){
    mathscore.innerHTML += "-";
}

divis.onclick = function(){
    mathscore.innerHTML += "/";
}
point.onclick = function(){
    mathscore.innerHTML += "."
}
equal.onclick = function(){
    let res = Number(eval(mathscore.value))
    result.textContent = res
}

back.onclick = function(){
    mathscore.innerHTML = mathscore.innerHTML.slice(0, -1);
}



