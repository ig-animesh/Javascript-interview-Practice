const data = [
    {
        id: '1',
        question: "What are accordion components?",
        answer: "The accordion component is a UI element that allows users to show and hide sections of related content on a page."
    },
    {
        id: '2',
        question: "What are accordion components?",
        answer: "The accordion component is a UI element that allows users to show and hide sections of related content on a page."
    },
    {
        id: '3',
        question: "What are accordion components?",
        answer: "The accordion component is a UI element that allows users to show and hide sections of related content on a page."
    },
    {
        id: '4',
        question: "What are accordion components?",
        answer: "The accordion component is a UI element that allows users to show and hide sections of related content on a page."
    },
];


const accordionWrapper = document.querySelector(".accordion");

function createAccordionData(){
    accordionWrapper.innerHTML = data.map(dataitem=> 
        `<div class= "accordion_item">
            <div class= "accordion_title">
                <h3>${dataitem.question}</h3>
                <i class= "fa-solid fa-arrow-down"></i>
            </div>
            <div class= "accordion-content">
                <p>${dataitem.answer}</p>
            </div>
        </div>`
    ).join("");

}

createAccordionData();

const getAccordionTitle = document.querySelectorAll(".accordion_title")

getAccordionTitle.forEach(currentItem=> {
    currentItem.addEventListener('click', (event)=> {
            if(currentItem.classList.contains("active")){
                currentItem.classList.remove("active")
            }
            else{
                let getAlredyAddedActiveClasses = document.querySelectorAll('.active');
                getAlredyAddedActiveClasses.forEach(currentActiveItem=> {
                    currentActiveItem.classList.remove("active");
                });

                currentItem.classList.add("active");
            }
    })
})