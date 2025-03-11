document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin').value;
    console.log(phoneNumber, pin);
});