

var yourScore = document.querySelector("#userScore")
var theirScore = document.querySelector("#computerScore")
var mes = document.querySelector("#result")

num1 = 0;
num2 = 0;
function add (x,y){
    return x+y;
}

function sub (x,y){
    return x-y;
}

function multi (x,y){
    return x*y;
}

function div (x,y){
    if(y == 0){
        return 0;
    }else{
        return x/y;
    }
    
}
function power (x,y){
    return x**y;
}

function res (){
    num1 = 0;
    num2 = 0;
}
function split (index){
    //index of the operator is passed to the function and the number before and after the operator is turned into a float to be operated with
    num1 = mes.textContent.substr(0,index);
    num2 = mes.textContent.substr(index+1);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
}

function operate(){
    //get operator
    mes.textContent = mes.textContent.substring(0, mes.textContent.length - 1);
    const plus = mes.textContent.indexOf("+",1);
    const minus = mes.textContent.indexOf("-",1);
    const times = mes.textContent.indexOf("*",1);
    const slash = mes.textContent.indexOf("/",1);
    const raise = mes.textContent.indexOf("^",1);
    //find which operator is used and call split to split up the two numbers and call its respective function (add, subtract, multiply, divide, power)
        if (plus !== -1){
            split(plus);
            mes.textContent = add(num1,num2);
        }else if (minus !== -1){
            split(minus);
            mes.textContent = sub(num1,num2);
        }else if (times !== -1){
            split(times);
            mes.textContent = multi(num1,num2);
        }else if (slash !== -1){
            split(slash);
            mes.textContent = div(num1,num2);
        }else if (raise !== -1){
            split(raise);
            mes.textContent = power(num1,num2);
        }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

// and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {

        //if AC is clicked make the display 0
        document.getElementById('AC').onclick = function() {
            mes.textContent = "0";
        }
        //if back is clicked chop on character off the end of the string, otherwise the string should just be 0 ****Currently Not Working***
        //AC and back don't work the first time around for some reason. they return themselves once and then won't do it again.
        document.getElementById('back').onclick = function() {
            if ((mes.textContent.length > 1)){
                if (mes.textContent.startsWith('0')){
                    mes.textContent = mes.textContent.substr(0,mes.textContent.length - 3);
                    console.log("here");
                }else{
                    mes.textContent = mes.textContent.substr(0,mes.textContent.length - 1);
                    console.log("there");
                }
            }else{
                mes.textContent = "0";
             
                
            }
        }
        //when a button is pressed the mes.text content should addd the button.id
        if (button.id != 'AC' && button.id != 'back'){
            mes.textContent = mes.textContent + button.id;
        }
            
        

        //if the button pressed is = operate on the numbers!
        if (mes.textContent.includes('=')){
            operate();
            res();
        }


        if ((((mes.textContent.split("+").length - 1) + (mes.textContent.split("-").length - 1) + (mes.textContent.split("*").length - 1) + (mes.textContent.split("/").length - 1) + (mes.textContent.split("^").length - 1)) > 1) && mes.textContent.charAt(0) !== '-'){
            //if an operator is not the first character, find that operator and call the operate function
            var op = mes.textContent.substr(mes.textContent.length-1,mes.textContent.length);
            
                operate();
                res();
                mes.textContent = mes.textContent + op;
  

        }

        if (mes.textContent.startsWith('0') && mes.textContent.charAt(1) !== '+' && mes.textContent.charAt(1) !== '-' && mes.textContent.charAt(1) !== '/' && mes.textContent.charAt(1) !== '*' && mes.textContent.charAt(1) !== '^'){
    
            //if mes = 0 and is not followed by + - * / ^
            //mes.textContent should just the button pressed and get rid of the zero, unless the button pressed is =.
            if (button.id != '='){
                mes.textContent = button.id;
            }else{
                mes.textContent = "0";
            }
        }

    });  

  });
  
