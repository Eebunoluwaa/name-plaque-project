// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const message = document.querySelector('#errorMessage');
const buyNowBtn = document.querySelector('.buy-submit');
// Refactoring with Arrow Function
const countLeters = (some_data) =>{
 
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

const buyNow = () =>{
  if(userInput.value.length === 0){
    message.textContent = "Enter set of numbers";
    message.style.color = "red";
  }else if(userInput.value.length > 15){
    message.textContent = "We have 15 letters in stock, and you have exceeded the limit.";
    message.style.color = "red";
  }else{
    message.textContent = "Congratulations!!!, you have just purchased this name";
    message.style.color = "green";
  }
}
buyNowBtn.addEventListener('click', buyNow)






buyNowBtn.addEventListener('click', buyNow)
