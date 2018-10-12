let points = document.querySelector("h2");

let scores = 0;
let a = document.querySelector("#answer");
let b = document.querySelector("#no");
let c = document.querySelector("#no2");


   
    a.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
                     
        })
    b.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
