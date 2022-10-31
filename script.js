let hr = document.getElementsByClassName("hours")[0];
let min = document.getElementsByClassName("mins")[0];
let sec = document.getElementsByClassName("secs")[0];

setInterval(() => {
    var current = new Date();
    hr.innerHTML =  current.getHours();
    min.innerHTML = current.getMinutes();
    sec.innerHTML =  current.getSeconds();
    }, 1000);

let analog = document.getElementsByClassName("analog")[0];
analog.addEventListener('click',function(){
    window.location.href = "analog.html";
})

let digital =  document.getElementsByClassName("digital")[0];
digital.addEventListener('click',function(){
    window.location.href= "index.html";
})