const postListContainer = document.querySelector('.post-list-container')

//Fetch using XHR

function fetchUsingXHR(){
 const xhr = new XMLHttpRequest();
 xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
 xhr.responseType= 'json';
 xhr.send();

 xhr.onload = ()=> {
    if(xhr.status === 200){

        dislayResults(xhr.response)
        
    }else{
        console.log('some error')
    }
 }
}

//Fetch using fetch

function fetchUsingFetchMethod(){
    const fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET',
        
    });

    fetchRequest.then(response => response.json()).then(result => dislayResults(result)).catch((e) => console.log(e))
}


 function dislayResults(posts){
    postListContainer.innerHTML = posts.map(postItem=> `
        <div class = "post-item">
            <h3>${postItem.title}</h3>
            <p>${postItem.body}</p>
        </div>
        `).join(" ");
 }
// fetchUsingXHR();
fetchUsingFetchMethod();


