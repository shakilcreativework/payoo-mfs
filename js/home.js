// add money to the account
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    if(pinNumber === '1234'){
        const balance = document.getElementById('current-balance').innerText;
        // new balance
        const newBalance = parseFloat(balance) + parseFloat(addMoney);
        document.getElementById('current-balance').innerText = newBalance;
        console.log(newBalance);
    }else{
        alert('failed to add money');
    }
    // console.log(addMoney, pinNumber);
});


// cash out
document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-cashout').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(pinNumber === '1234'){
        const balance = document.getElementById('current-balance').innerText;
        // new balance
        const newBalance = parseFloat(balance) - parseFloat(addMoney);
        document.getElementById('current-balance').innerText = newBalance;
        console.log(newBalance);
    }else{
        alert('failed to add money');
    }
    // console.log(addMoney, pinNumber);
});