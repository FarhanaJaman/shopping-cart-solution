function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const priviousPhoneNumber    = parseInt(phoneNumberString);
    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = priviousPhoneNumber+1;
        
    }
    else{
        newPhoneNumber= priviousPhoneNumber-1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}

function updatePhoneTotalPrice(newPhoneNumber){
const PhoneTotalPrice = newPhoneNumber*1219;
const phoneTotalElement = document.getElementById('phone-total');
phoneTotalElement.innerText = PhoneTotalPrice;

}

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calculateSubTotal(){
    //calculate total

const currentPhoneTotal = getTextElementValueById('phone-total');
const currentCaseTotal = getTextElementValueById('case-total');


const currentSubTotal = currentPhoneTotal +currentCaseTotal;
const subTotalElement = document.getElementById('sub-total');
subTotalElement.innerText = currentSubTotal;
}





document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber=updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();






});
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

});


