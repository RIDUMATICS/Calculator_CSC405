var dp1 =""
var dp2 = ""
var number = [];
isButtonClick = false;
addition = false;
multiply = false;
divide = false;
minus = false;
mod = false;
npower = false;
yroot = false;

inputNum = (e) => {
    isButtonClick = true;
    if((document.getElementById("display2").getElementsByTagName("h1")[0].innerText == "0" || document.getElementById("display2").getElementsByTagName("h1")[0].innerText == "")  && e == "."){
        dp2 = "0."
    }else if(document.getElementById("display2").getElementsByTagName("h1")[0].innerText != "0" && e == "."){
        if(dp2.includes(".")){ dp2 = dp2;}
        else{
            dp2 += e;
        }
    }else if((document.getElementById("display2").getElementsByTagName("h1")[0].innerText == "0" || document.getElementById("display2").getElementsByTagName("h1")[0].innerText == "") && e == "0"){
        dp2 = ""
    }
    else{
        dp2 += e
    }
    
    document.getElementById("display2").getElementsByTagName("h1")[0].innerText = dp2;

    
};

inputOpt = (e) => {
    console.log(number[0]);
    
    
    if(isButtonClick){
       if(number[1] == undefined){
           number.push(parseFloat(dp2))
       }
       else{
           number[1] = parseFloat(dp2);
       }

       if(addition){
            number[0] = number[0] + number[1];
            document.getElementById("display2").getElementsByTagName("h1")[0].innerText = number[0] ;
            addition = false;
       }else if(multiply){
            number[0] = number[0] * number[1];
            document.getElementById("display2").getElementsByTagName("h1")[0].innerText = number[0] ;
            multiply = false;
       }else if(divide){
            number[0] = number[0] / number[1];
            document.getElementById("display2").getElementsByTagName("h1")[0].innerText = number[0] ;
            divide = false;
       }else if(minus){
            number[0] = number[0] - number[1];
            document.getElementById("display2").getElementsByTagName("h1")[0].innerText = number[0] ;
            minus = false;
        }else if(mod){
            number[0] = number[0] % number[1];
            document.getElementById("display2").getElementsByTagName("h1")[0].innerText = number[0] ;
            mod = false;
        }else if(npower){
            number[0] = Math.pow(number[0], number[1]);
            document.getElementById("display2").getElementsByTagName("h1")[0].innerText = number[0] ;
            npower = false;
        }else if(yroot){
            number[0] = Math.pow(number[0], 1/number[1]);
            document.getElementById("display2").getElementsByTagName("h1")[0].innerText = number[0] ;
            yroot = false;
        }

        dp1 = dp1 + " "+ dp2 + " "+ e;
        isButtonClick = false;
        dp2 ="";
        if(e == "="){
            dp1 = "";
            dp2 = number[0]; 
            number.pop();
            number.pop();
            isButtonClick = true 
        }
        document.getElementById("display1").getElementsByTagName("h1")[0].innerText = dp1; 
    }else{
        if( document.getElementById("display1").getElementsByTagName("h1")[0].innerText != ""){
        dp1 = dp1.slice(0, dp1.length-1);
        dp1 += e
        document.getElementById("display1").getElementsByTagName("h1")[0].innerText = dp1;
        }
        
    }   
    switch(e){
        case "+":
            addition = true;
            multiply = false;
            divide = false;
            minus = false;
            break;
        case "*":
            multiply = true;
            addition = false;
            divide = false;
            minus = false;
            break;
        case "÷":
            divide = true;
            addition = false;
            multiply = false;
            minus = false;
            break;
        case "-":
            minus = true;
            addition = false;
            multiply = false;
            divide = false;
            break;
        case "Mod":
            mod = true;
            minus = false;
            addition = false;
            multiply = false;
            divide = false;
        case "^":
            npower = true;
            mod = false;
            minus = false;
            addition = false;
            multiply = false;
            divide = false;
        case "yroot":
            yroot = true;
            npower = false;
            mod = false;
            minus = false;
            addition = false;
            multiply = false;
            divide = false;

        
    }
};

clearDisplay = () =>{
    document.getElementById("display2").getElementsByTagName("h1")[0].innerText = 0;
    dp2 = "";
    
}
clearBoth = () =>{
    location.reload();
}

backSpace = () => {
    dp2 = dp2.slice(0, dp2.length-1)
    if(dp2.length == 0){
        dp2 = 0;
    }
    document.getElementById("display2").getElementsByTagName("h1")[0].innerText = dp2;
} 

var angle = document.getElementById("Deg");

changeAngle = (e) => {
    if(e == "Deg"){
        angle.id = "Rad";
        angle.getElementsByTagName("h1")[0].innerText = "Rad";
    }else{
        angle.id = "Deg";
        angle.getElementsByTagName("h1")[0].innerText = "Deg";
    }
    
}

function convertAngle(number){
    if(angle.id == "Deg"){
        return (number *(Math.PI/180));
    }else{
        return number;
    }
}
sciCal =(e) =>{
    if(dp2 == ""){
        dp2 = 0
    }

    switch(e){
        case "sin":
            if( dp1 == ""){ 
                dp1 = `sin(${dp2})`;
            }else{ dp1 = `sin(${dp1})`; }
            dp2 = Math.sin(convertAngle(dp2));
            break;
        case "cos":
            if( dp1 == ""){ 
                dp1 = `cos(${dp2})`;
            }else{ dp1 = `cos(${dp1})`; }
            dp2 = Math.cos(convertAngle(dp2));
            break;
        case "tan":
            if( dp1 == ""){ 
                dp1 = `tan(${dp2})`;
            }else{ dp1 = `tan(${dp1})`; }
            dp2 = Math.tan(convertAngle(dp2));
            break;
        case "asin":
            if( dp1 == ""){ 
                dp1 = `asin(${dp2})`;
            }else{ dp1 = `asin(${dp1})`; }
            
            if(angle.id == "Deg"){
                dp2 = Math.asin(dp2) *(180/Math.PI);
            }else{
                dp2 = Math.asin(dp2);
            }
            
            break;
        case "acos":
            if( dp1 == ""){ 
                dp1 = `acos(${dp2})`;
            }else{ dp1 = `acos(${dp1})`; }
            
            if(angle.id == "Deg"){
                dp2 = Math.acos(dp2) *(180/Math.PI);
            }else{
                dp2 = Math.acos(dp2);
            }

            break;
        case "atan":
            if( dp1 == ""){ 
                dp1 = `atan(${dp2})`;
            }else{ dp1 = `atan(${dp1})`; }
            
            if(angle.id == "Deg"){
                dp2 = Math.atan(dp2) *(180/Math.PI);
            }else{
                dp2 = Math.atan(dp2);
            }

            break;
        case "plusminus":
            dp2 *= -1
            break;
        case "sqrt":
            dp1 = `sqrt(${dp2})`
            dp2 = Math.sqrt(dp2);
            break;
        case "sqr":
            dp1 = `sqr(${dp2})`
            dp2 = Math.pow(dp2, 2);
            break;
        case "pi":
            dp2 = Math.PI;
            isButtonClick = true;
            break;  
        case "powerten" :
            dp1 = `powten(${dp2})`
            dp2 = Math.pow(10, dp2);
            break
        case "powerexpo" :
            dp1 = `powe(${dp2})`
            dp2 = Math.pow(Math.E, dp2);
            break;
        case "percnt" :
            dp1 = `percnt(${dp2})`
            dp2 = dp2/100;
            break;
        case "permil":
            dp1 = `permil(${dp2})`
            dp2 = dp2/1000;
            break;
        case "log":
            dp1 = `log(${dp2})`
            dp2 = Math.log10(dp2);
            break;
        case "ln" :
            dp1 = `ln(${dp2})`
            dp2 = Math.log(dp2);
            break;
        case "inverse":
            dp1 = `reciproc(${dp2})`
            dp2 = 1/dp2;
            break;
        case "fact":
            dp1 = `fact(${dp2})`
            dp2=(factorial = (x) => {
                    var number = 1
                    for(i = 1; i <= x ; i++){
                        number *= i;
                    }
                    if( x < 0){
                        return "Invalid input"
                    }
                    return number;
            })(dp2);
        

            

    }

    
        document.getElementById("display1").getElementsByTagName("h1")[0].innerText = dp1
        document.getElementById("display2").getElementsByTagName("h1")[0].innerText =  dp2;
        
        

}

console.log(dp2);
