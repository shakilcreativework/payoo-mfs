// show add money form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    // show cash out button clicked
    // console.log('show cashout button');
    const showAddMoney = document.getElementById('show-add-money-from').classList.remove('hidden');
    const hiddenCashOut = document.getElementById('show-cash-money-from').classList.add('hidden');
});

// show cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    // show cash out button clicked
    // console.log('show cashout button');
    const hiddenAddMoney = document.getElementById('show-add-money-from').classList.add('hidden');
    const showCashOut = document.getElementById('show-cash-money-from').classList.remove('hidden');
});