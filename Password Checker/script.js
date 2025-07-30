const passwrdInput = document.querySelector('#passwrd-input')
const passwrdOutput = document.querySelector('#output')


passwrdInput.addEventListener('input', function(){
    console.log(passwrdInput.value)
    let password = passwrdInput.value;
    if(password.length <8) {
        passwrdOutput.innerText = 'Password is weak'
        passwrdOutput.style.color = 'red'
    }
    else{
        // passwrdOutput.innerText = 'Password is too long'
        // passwrdOutput.style.color = 'green'

        if(password.search == /[a-z]/){
            passwrdOutput.innerText = 'Password is missing a lowercase letter'
            passwrdOutput.style.color = 'red'
        }
        else if (password.search == /[A-Z]/){
            passwrdOutput.innerText = 'Password is missing a uppercase letter'
            passwrdOutput.style.color = 'red'
        }
        else if (password.search == /[0-9]/){
            passwrdOutput.innerText = 'Password is missing a numeric letter'
            passwrdOutput.style.color = 'red'
        }
        else if (password.search == /[!\@\#\$\%\^\&\*\(\)\{\}\<\>?\-]/){
            passwrdOutput.innerText = 'Password is missing a special character'
            passwrdOutput.style.color = 'red'
        }
        else{
            passwrdOutput.innerText = 'Password is strong'
            passwrdOutput.style.color = 'lightgreen'
            passwrdOutput.style.fontSize = '20px'
        }

    }
});