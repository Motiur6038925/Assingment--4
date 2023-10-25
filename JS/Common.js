function getTextElementvalueByid(elementId){
    const PepsiTotalElement = document.getElementById(elementId);
    const currentPepsiTotalString = PepsiTotalElement.innerText;
    const currentPepsiTotal = parseInt(currentPepsiTotalString);
    return currentPepsiTotal;
}

function setTextElementvalueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}





function calculateSubTotal(){
    // calculate total //
const currentPepsiTotal = getTextElementvalueByid('Pepsi-total');
const currentFantaTotal = getTextElementvalueByid('Fanta-total');

const currentSubTotal = currentPepsiTotal + currentFantaTotal ;
setTextElementvalueById('sub-total', currentSubTotal)

// calculate tax //
const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
const taxAmount = parseInt(taxAmountString);
setTextElementvalueById('tax-amount', taxAmount)

const finaltotal = currentSubTotal + taxAmount  ;
setTextElementvalueById('final-total', finaltotal)


}


   // Clear Cart button //
   document.getElementById('Clear-Cart').addEventListener('click', function() {
    // Clear the phone number field value
    const SubTotal = document.getElementById('sub-total');
    const TaxToatal = document.getElementById('tax-amount');
    const FinalTotal = document.getElementById('final-total');
    
    SubTotal.innerText = 0;
    TaxToatal.innerText = 0;
    FinalTotal.innerText = 0;

// For clear Fanta By Clear Cart Button //
    const Fantatotal = document.getElementById('Fanta-total');
    const Fantafiled = document.getElementById('Fanta-number-field');
    
    Fantatotal.innerText = 0;
    Fantafiled.value = 0;

// For clear Pepsi By Clear Cart Button //

const Pepsifiled = document.getElementById('Pepsi-number-field');
const Pepsitotal = document.getElementById('Pepsi-total');

Pepsitotal.innerText = 0;
Pepsifiled.value = 0;
    

  });