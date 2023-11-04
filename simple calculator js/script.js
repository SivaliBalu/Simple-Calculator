function convert(){ 
    let expression = document.getElementById("input").value 
    let sp = expression.split(/([+\-*/])/) 
    let op1 = Number(sp[0]) 
    let op2 = Number(sp[2]) 
    let operator = sp[1]  
    let result ; 
    switch(operator) {
       case '+':
            result =  op1+op2  
           break; 
      case '-':
           result = op1 - op2 
           break; 
      case '*':
          result = op1*op2  
           break; 
       case '/' : 
           result = op1/op2
           break ; 
    } 

    let display = document.getElementById("result") 
    display.innerHTML = result 

  } 
  