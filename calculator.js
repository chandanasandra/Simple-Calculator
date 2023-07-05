let input1;
let input2;
let output;
const add=document.querySelector(".add");
const subtract=document.querySelector(".subtract");
const mutiply=document.querySelector(".multiply");
const divide=document.querySelector(".divide");
const reset=document.querySelector(".reset");
const result=document.querySelector(".result");

add.addEventListener("click",()=>{
    input1=parseFloat(document.getElementById("number1").value);
    input2=parseFloat(document.getElementById("number2").value);
    output=input1+input2;
    result.textContent=output;
})
subtract.addEventListener("click",()=>{
    input1=parseFloat(document.getElementById("number1").value);
    input2=parseFloat(document.getElementById("number2").value);
    output=input1-input2;
    result.textContent=output;
})
mutiply.addEventListener("click",()=>{
    input1=parseFloat(document.getElementById("number1").value);
    input2=parseFloat(document.getElementById("number2").value);
    output=input1*input2;
    result.textContent=output;
})
divide.addEventListener("click",()=>{
    input1=parseFloat(document.getElementById("number1").value);
    input2=parseFloat(document.getElementById("number2").value);
    output=input1/input2;
    result.textContent=output;
})
reset.addEventListener("click",()=>{
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    result.textContent="";
})
