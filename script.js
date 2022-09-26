// add query selectors for each element to Event to target:

// 1.numberfield
// 2. submit button
// 3. para that will store the number entered by the User 
// 4. para that will store fibonacci number 

const numberField= document.querySelector("#numberField");
const fibpos= document.querySelector("#fibonacciPos");
const fibnum= document.querySelector("#fibonacciNum");
const submitBtn=document.querySelector('.submitFibonacci');
const resetBtn=document.querySelector('.resetFibonacci');
const solution=document.querySelector('#solution');

submitBtn.addEventListener("click",output);
resetBtn.addEventListener('click',resetInput);

function output(){
 fibnum.style.color="black"
 let position=Number(numberField.value);
 fibpos.textContent=`You Entered: ${position}`;
 solution.innerHTML=`Fibonacci Number <b>${position}</b> is <b>${fibonacci(position)} </b>`
 fibnum.textContent= `Fibonacci Numbers: `;
 if (position<=0) {
  fibpos.textContent=``;
  fibnum.style.color="red"
  solution.innerHTML=''
  fibnum.textContent= `Please enter a number greater than zero`;
 }
 for (i=1; i<=position; i++){
  if(i===1){
   fibnum.textContent+=`${fibonacci(i)}`
  }else{
   fibnum.textContent+=`, ${fibonacci(i)}` 
  }
 }
}

const fibonacci = function(position) { 
 let value='';
if (position<0){
 return value="OOPS";
} else if (position==0){
 return value=0;
} else if (position==1||position==2){
 return value=1;
}
else {
 value=fibonacci(position-2) + fibonacci(position-1);
}
return value;
};

function resetInput(){
 fibpos.textContent=``;
 fibnum.textContent= ``;
 numberField.value='';
 fibnum.style.color="black"
 solution.innerHTML=''
}