const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container')

hexBtn.addEventListener("click", ()=> {
        let characterSet = '0123456789ABCDEF';
        let hexColorOutput = "";

        for( let i = 0, charSetLength = characterSet.length; i<6; ++i)
        {
            hexColorOutput += characterSet.charAt(Math.floor(Math.random()* charSetLength));
        }   
      hexColorValue.textContent = `#${hexColorOutput}`;
      hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;

      hexBtn.style.color = `#${hexColorOutput}`;
});



//RGB Color generator
const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getBlueInputRange = document.querySelector('#blue');
const getGreenInputRange = document.querySelector('#green');
const rgbColorContainer = document.querySelector('.rgb-color-container');
const hexCopyBtn = document.querySelector('.hex-copy-color');
const rgbCopyBtn = document.querySelector('.rgb-copy-color');
const rgbColorValue = document.querySelector('.rgb-color-value');




rgbBtn.addEventListener("click", ()=> {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    
    rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

    rgbBtn.style.color= `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
});


function copyHexColorToClipboard(){
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert('Hex color copied to clipboard')
}
hexCopyBtn.addEventListener("click", copyHexColorToClipboard);


function copyRgbColorToClipboard(){
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert('Rgb color copied to clipboard');
}
rgbCopyBtn.addEventListener('click', copyRgbColorToClipboard);