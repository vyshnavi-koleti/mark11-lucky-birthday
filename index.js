const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const buttonCheck = document.querySelector("#button-check");
const displayMesssage = document.querySelector("#display-message")

buttonCheck.addEventListener('click', checkBirthdayIsLucky);

function checkBirthdayIsLucky(){

    if(dateOfBirth.value && luckyNumber.value){

        const sumOfDigits = calculateSum(dateOfBirth.value);
        if(sumOfDigits % luckyNumber.value === 0){

            displayMesssage.innerText = "YAY! Your birthday is lucky" ;
        }
        else{

            displayMesssage.innerText = "Oh no! Your birthday is not lucky" ;
        }
    }
    else{
        
        displayMesssage.innerText = "Please enter both the fields" ;
    }


}


function calculateSum(dob){

    dob = dob.replaceAll("-","");
    let sumOfDigits = 0;
    for(i of dob){
        sumOfDigits = sumOfDigits + Number(i) ;
    }
    return sumOfDigits;
}