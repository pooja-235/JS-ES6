import add ,{subtract,multiply,division} from './util.js';
//import * as util from from './util.js';



function operation(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let oper=document.getElementById("opt").value;
    let result
    if(oper == '+'){
        result=add(num1,num2)
    }
    else if(oper == '-'){
        result = subtract(num1,num2)
    }
    else if(oper == '*'){
        result = multiply(num1,num2)
    }
    else if(oper == '/'){
        result = division(num1,num2)
    }

    let calculation = document.getElementById("res").innerHTML=result
}


