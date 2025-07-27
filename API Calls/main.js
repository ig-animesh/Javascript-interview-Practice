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


 async function fetchUsingAsyncAwaitMethod(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {method: 'GET',
        
    });

    const result = await response.json();
    dislayResults(result);
    
    console.log(result)
}

function helperMethod(method, url){
    const promise = new Promise((resolve, reject)=> {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.send();

        xhr.onload = ()=>{
            if(xhr.status === 200){
                resolve(xhr.response)
            } else{
                reject(xhr.response)
            }
        }
    })

    return promise;
}


async function fetchUsingXHRAsyncAwait(){

    const response = await helperMethod('GET', 'https://jsonplaceholder.typicode.com/posts')
    dislayResults(response);

    console.log(response)

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
//fetchUsingFetchMethod();
//fetchUsingAsyncAwaitMethod();

fetchUsingXHRAsyncAwait();