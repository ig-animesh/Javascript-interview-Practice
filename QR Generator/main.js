const qrInput = document.querySelector('#qr-input')
const qrButton = document.querySelector('#qr-btn')
const qrImg = document.querySelector('#qr-img')

console.log(qrInput, qrButton, qrImg)
qrButton.addEventListener('click', ()=>{
    let inputVal = qrInput.value;


    if(!inputVal){
        alert('Please enetr Valid URL');
    }
    else{
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example'
        qrImg.alt= `QR Code for ${inputval}`
    }
})