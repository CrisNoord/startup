
$(document).ready(function() {
   executeCode();
 })


function executeCode(){

 document.querySelector(".exe-ta").addEventListener('click', function () {
 
 
    var head = document.querySelector("head");
    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.innerHTML = document.querySelector(".txtArea").value;
    head.appendChild(newScript);

}, false);

}