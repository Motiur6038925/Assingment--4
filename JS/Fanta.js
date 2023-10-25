/* 
 1: add event listener to the case plus button
  2: get the value inside the case number field (input field)
  3: Convert the number to integer
  4: calculate the newcase number
  5: set the value  case number field 

*/

function updateFantaNumber(isIncrease){
    const Fantanumberfield = document.getElementById('Fanta-number-field');
    const FantanumberString = Fantanumberfield.value;
    const previousFantanumber = parseInt(FantanumberString);
    const newFantanumber = previousFantanumber + 1;
    
   
    Fantanumberfield.value = newFantanumber;

    let newFantaNumber;

    if(isIncrease === true){
        newFantaNumber = previousFantanumber + 1;
    }
   else{
     newFantaNumber = previousFantanumber - 1;
   }

   Fantanumberfield.value = newFantaNumber;


 return newFantaNumber;

}

function updateFantaTotalPrice(newFantaNumber){
    const FantaTotalPrice = newFantaNumber * 59;
    const FantaTotalElement = document.getElementById('Fanta-total');
    FantaTotalElement.innerText = FantaTotalPrice; 

}




document.getElementById('btn-Fanta-plus').addEventListener('click', function(){
  const  newFantaNumber = updateFantaNumber(true);

 updateFantaTotalPrice(newFantaNumber);

 calculateSubTotal()


})

document.getElementById('btn-Fanta-minus').addEventListener('click', function(){
    const  newFantaNumber = updateFantaNumber(false);


    updateFantaTotalPrice(newFantaNumber);
    
    calculateSubTotal()


})

// Clear button //
document.getElementById('Fanta-clear-btn').addEventListener('click', function() {
  // Clear the phone number field value
  const Fantatotal = document.getElementById('Fanta-total');
  const Fantafiled = document.getElementById('Fanta-number-field');
  
  Fantatotal.innerText = 0;
  Fantafiled.value = 0;

});




















