

let jokeDiv = document.querySelector('.joke');
let getOtherJokeBtn = document.getElementById('joke-btn');


function getJoke(){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    
    xhr.onreadystatechange = function(){
    if(this.readyState === 4){
        if(this.status === 200)
            jokeDiv.textContent = JSON.parse(this.responseText).value;
        else{
            jokeDiv.textContent = `Ooops!! Somthing Went wrong, Try after a descent time :(`
        }
    }
    }
    xhr.send();
}

getOtherJokeBtn.addEventListener('click',getJoke);
document.addEventListener('DOMContentLoaded',getJoke);