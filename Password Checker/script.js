const passwrdInput = document.querySelector('#passwrd-input')
const passwrdOutput = document.querySelector('#output')


passwrdInput.addEventListener('input', function(){
    console.log(passwrdInput.value)
    let password = passwrdInput.value;
    if(password.length <8) {
        passwrdOutput.innerText = 'Password is too short'
        passwrdOutput.style.color = 'red'
    }
    else{
        passwrdOutput.innerText = 'Password is too long'
        passwrdOutput.style.color = 'green'

    }
});