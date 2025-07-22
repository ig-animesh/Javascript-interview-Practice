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

rgbBtn.addEventListener("click", ()=> {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    

    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

    rgbBtn.style.color= `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
})