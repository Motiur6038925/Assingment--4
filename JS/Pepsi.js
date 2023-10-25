/* 
 1: add event listener to the case plus button
  2: get the value inside the case number field (input field)
  3: Convert the number to integer
  4: calculate the newcase number
  5: set the value  case number field 

*/

function updatePepsiNumber(isIncrease){
    const Pepsinumberfield = document.getElementById('Pepsi-number-field');
    const PepsinumberString = Pepsinumberfield.value;
    const previousPepsinumber = parseInt(PepsinumberString);
    const newPepsinumber = previousPepsinumber + 1;
    
   
    Pepsinumberfield.value = newPepsinumber;

    let newPepsiNumber;

    if(isIncrease === true){
        newPepsiNumber = previousPepsinumber + 1;
    }
   else{
     newPepsiNumber = previousPepsinumber - 1;
   }

   Pepsinumberfield.value = newPepsiNumber;





 return newPepsiNumber;

}

function updatePepsiTotalPrice(newPepsiNumber){
    const PepsiTotalPrice = newPepsiNumber * 1219;
    const PepsiTotalElement = document.getElementById('Pepsi-total');
    PepsiTotalElement.innerText = PepsiTotalPrice; 

}

// function getTextElementvalueByid(elementId){
//     const phoneTotalElement = document.getElementById(elementId);
//     const currentPhoneTotalString = phoneTotalElement.innerText;
//     const currentPhoneTotal = parseInt(currentPhoneTotalString);
//     return currentPhoneTotal;
// }

// function calculateSubTotal(){
//     // calculate total //
// const currentPhoneTotal = getTextElementvalueByid('phone-total');
// const currentCaseTotal = getTextElementvalueByid('case-total');
// const currentSubTotal = currentPhoneTotal + currentCaseTotal ;



// const subTotalElement = document.getElementById('sub-total');
// subTotalElement.innerText = currentSubTotal;
// }


   // Clear button //
   document.getElementById('Pepsi-clear-btn').addEventListener('click', function() {
    // Clear the Pepsi number field value
    const Pepsifiled = document.getElementById('Pepsi-number-field');
    const Pepsitotal = document.getElementById('Pepsi-total');
    
    Pepsitotal.innerText = 0;
    Pepsifiled.value = 0;

  });
  








document.getElementById('btn-Pepsi-plus').addEventListener('click', function(){
  const  newPepsiNumber = updatePepsiNumber(true);

 updatePepsiTotalPrice(newPepsiNumber);

 calculateSubTotal()





});

document.getElementById('btn-Pepsi-minus').addEventListener('click', function(){
    const  newPepsiNumber = updatePepsiNumber(false);


    updatePepsiTotalPrice(newPepsiNumber);
    
    calculateSubTotal()

})