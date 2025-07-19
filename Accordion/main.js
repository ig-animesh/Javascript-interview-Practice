const data = [
    {
        id: '1',
        question: "What are accordion components?",
        answer: "Accordion components are user interface elements"
    },
    {
        id: '2',
        question: "What are accordion components?",
        answer: "Accordion components are user interface elements"
    },
    {
        id: '3',
        question: "What are accordion components?",
        answer: "Accordion components are user interface elements"
    },
    {
        id: '4',
        question: "What are accordion components?",
        answer: "Accordion components are user interface elements"
    },
];


const accordionWrapper = document.querySelector(".accordion");

function createAccordionData(){
    accordionWrapper.innerHTML = data.map(dataitem=> 
        `<div class= "accordion_item">
            <div class= "accordion_title">
                <h3>${dataitem.question}</h3>
                <i class= "fa-solid fa-arrow-up"></i>
            </div>
        </div>`)
}

createAccordionData();