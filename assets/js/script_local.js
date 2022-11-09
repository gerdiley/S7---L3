var output = document.getElementById('output');
var btnLog = document.getElementById('log');
var btnDelete = document.getElementById('delete');


btnLog.addEventListener('click', function(e){
    e.preventDefault;
    function write (){
        var valueInput = document.getElementById('input').value;
        output.innerHTML = valueInput;
        localStorage.setItem('val', valueInput); 
      }
     write();
});


btnDelete.addEventListener('click', function(e){
    e.preventDefault;
    function clear(){
        localStorage.clear();
    }
    clear();
})



