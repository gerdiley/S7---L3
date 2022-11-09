// counter storage

var timer = document.getElementById('timer');
var s = 0;
s = sessionStorage.getItem("time")


setInterval(() => {
    function counter(){
        return s++
    }
    sessionStorage.setItem("time", s);
    timer.innerHTML = `session time: ${counter()}`;
    
   
}, 1000);




