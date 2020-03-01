const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const shop = document.getElementById('shopArea');
    shop.style.display = 'block';
})




var increaseBtn = document.getElementById('increaseItem');
increaseBtn.addEventListener('click',function(){
    const increaseNumber = incNumber('incDec');
   
   updateItem('currentItem', increaseNumber);
   updateItem('totalPrice', increaseNumber);
   updateItem('totalPriceTax', increaseNumber);
  
})

var decreaseBtn = document.getElementById('decreaseItem');
decreaseBtn.addEventListener('click',function(){
    const decreaseNumber = decNumber('incDec');
    updateItem('currentItem', -1*decreaseItem);
   updateItem('totalPrice', -1*decreaseItem);
   updateItem('totalPriceTax',-1*decreaseItem);
    
})

var increaseBtn = document.getElementById('increaseItemTwo');
increaseBtn.addEventListener('click',function(){
    const increaseNumber = incNumber('incDecTwo');
    updateItem('currentItemTwo',increaseNumber);
    updateItem('totalPrice', increaseNumber);
    updateItem('totalPriceTax', increaseNumber);
})

var decreaseBtn = document.getElementById('decreaseItemTwo');
decreaseBtn.addEventListener('click',function(){
    const decreaseNumber = decNumber('incDecTwo');
    updateItem1('currentItemTwo', -1*decreaseItem);
    updateItem1('totalPrice', -1*decreaseItem);
    updateItem1('totalPriceTax',-1*decreaseItem);
})


function incNumber(id){
   const increaseAmount = document.getElementById(id).value++;
   const increaseNumber = parseInt(increaseAmount);
   return increaseNumber;
}

function decNumber(id){
    const decreaseAmount = document.getElementById(id).value--;
    const decreaseNumber = parseInt(decreaseAmount);
    return decreaseNumber;
}

function updateItem(id, increaseNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseInt(current);
    const totalItems =  currentNumber + ( increaseNumber * currentNumber);
    document.getElementById(id).innerText = totalItems;
    
}

const checkOutBtn = document.getElementById("checkOut");
checkOutBtn.addEventListener('click',function(){
    alert("Thank You For Your Purchase!");
})