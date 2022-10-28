const form = document.querySelector('.form-wrapper');
const formBtn = document.querySelector('.form-btn');
const cardholderName = document.querySelector('#cardholder-name');
const expMonth = document.getElementById('exp-date-month');
const expYear = document.getElementById('exp-date-year');
const cardNumbers = document.getElementById('card-number');
const cvcNumbers = document.getElementById('cvc');
const nameError = document.querySelector('.name-error');

const numberError = document.querySelector('.number-error');
const expiryError = document.querySelector('.expiry-error');
const cvcError = document.querySelector('.cvc-error');

// const blankError = document.querySelectorAll('.blank-error');

const errorArr = [];

const nameInputHandler = (event) =>{
    if(cardholderName.value.length >20){
        return
    }
   
    const cardName = document.querySelector('.card-front-name');
    cardName.textContent = event.target.value;
    
}

const cardNumberHandler =(event) =>{
    if (cardNumbers.value.trim().length > 16){
        return
        // cardNumbers.setAttribute("disabled",""); 
    }
     let numbers = cardNumbers.value;
     const parts = numbers.match(/.{4}/g) || [];
     
     const cardNumberCardFront = document.querySelector('.card-front-main-Numbers');

    cardNumberCardFront.textContent = parts.join(' ');

}
const expMonthHandler = (event) =>{
    if(expMonth.value.length > 2){
        return
    }
    const cardExpMonth = document.querySelector('.card-front-exp-month');
    cardExpMonth.textContent = event.target.value;
    
}
const expYearHandler = (event) =>{
    if(expYear.value.length > 2){
        return
    }
    const cardExpYear = document.querySelector('.card-front-exp-year');
    cardExpYear.textContent = event.target.value;
    
}
const cvcHandler = (event) =>{
    if(cvcNumbers.value.length > 3){
        return
    }
    const cardCvcNumbers = document.querySelector('.card-back-numbers');
    cardCvcNumbers.textContent = event.target.value;
    
}

const blankInputCheck = (input, err) =>{
if (input.value.trim().length == 0 ){

    if(input.id == 'card-number'){
        err.textContent = "Can't be blank";
    }
    input.classList.add('invalid');

err.style.display = 'block';

}else{
    input.classList.remove('invalid');

    err.style.display ='none';
    
}
}

const checkCardNumbersHandler = () =>{
    const regExp = /^\d+$/;
    const str = cardNumbers.value;

    if(!regExp.test(str)){
        numberError.style.display = 'block';
        numberError.textContent = 'Wrong format, numbers only.'
    }else{
        numberError.style.display = 'none';
    }

}



const submitHandler = (event) =>{
    event.preventDefault();
    

}


cardholderName.addEventListener('keyup', nameInputHandler);
expMonth.addEventListener('keyup', expMonthHandler);
expYear.addEventListener('keyup', expYearHandler);
cardNumbers.addEventListener('keyup', cardNumberHandler);
cvc.addEventListener('keyup', cvcHandler);
formBtn.addEventListener('submit', submitHandler);

form.addEventListener('submit', (event) =>{
    event.preventDefault();
   blankInputCheck(cardholderName, nameError);
   blankInputCheck(cardNumbers, numberError);
   blankInputCheck(expMonth, expiryError);
   blankInputCheck(expYear, expiryError);
   blankInputCheck(cvc, cvcError);

   checkCardNumbersHandler();

})