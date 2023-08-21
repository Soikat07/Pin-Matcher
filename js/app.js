function getPin(){
     const pin= generatePin();
     const pinString=pin+'';
     if(pinString.length===4){
          return pin;
     }
     else{
          getPin();
     }
}
function generatePin(){
     const random= Math.round(Math.random()*10000);
     return random;
}

document.getElementById('btn-generate').addEventListener('click',function(){
     const pin= getPin();
     const displayPin=document.getElementById('display-pin');
     displayPin.value=pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
     const number= event.target.innerText;
     const typedNumberField=document.getElementById('typed-numbers');
     const previousNumber=typedNumberField.value;
     if(isNaN(number)){
          if(number==='C'){
               typedNumberField.value='';
          }
          else if(number==='<'){
               const digits= previousNumber.split('');
               digits.pop();
               const remainigDigits= digits.join('');
               typedNumberField.value= remainigDigits;
          }
     }
     else{
          const newTypedNumber=previousNumber+number;
          typedNumberField.value=newTypedNumber;
     }

})
     document.getElementById('btn-submit').addEventListener('click', function(){
          const generatePin= document.getElementById('display-pin');
          const pinValue= generatePin.value;

          const typedNumbers= document.getElementById('typed-numbers');
          const typedNumber= typedNumbers.value;

          const pinMatched= document.getElementById('pin-matched');
          const pinUnMatched= document.getElementById('pin-unmatched');

          if(pinValue===typedNumber){
               pinMatched.style.display='block'
               pinUnMatched.style.display='none'
          }
          else{
               pinUnMatched.style.display='block'
               pinMatched.style.display='none'
          }
})