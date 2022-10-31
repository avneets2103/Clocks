let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec =  document.getElementById("sec");

setInterval(() => {
var current = new Date();
// if(current.getHours()>12){
//     hAngle= ((current.getHours()-12)*30) + (current.getMinutes()/2) + (current.getSeconds()/120); 
// }
// else{
// }
hAngle= ((current.getHours())*30) + (current.getMinutes()/2); 

mAngle = (6*current.getMinutes())+(current.getSeconds()/10);
sAngle =  6*(current.getSeconds()+(current.getMilliseconds()/1000));
hr.style.transform="rotate("+hAngle+"deg)";
hr.style.transformOrigin='bottom';
min.style.transform="rotate("+mAngle+"deg)";
min.style.transformOrigin='bottom';
sec.style.transform="rotate("+sAngle+"deg)";
sec.style.transformOrigin='bottom';
}, 1);

let analog = document.getElementsByClassName("analog2")[0];
analog.addEventListener('click',function(){
    window.location.href = "analog.html";
})

let digital =  document.getElementsByClassName("digital2")[0];
digital.addEventListener('click',function(){
    window.location.href= "index.html";
})