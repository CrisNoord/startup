
$(document).ready(function() {
   executeCode()
   saveCode();
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
function saveCode(){
	var area = document.querySelector('.txtArea');
    if (!area.value) {
    	area.value = window.localStorage.getItem('value');
    }
    updateLog(false);
  	// Text will be saved locally
    document.querySelector('.save-ta').addEventListener('click', function () {
    	window.localStorage.setItem('value', area.value);
        window.localStorage.setItem('timestamp', (new Date()).getTime());
        updateLog(true);
    }, false);
	function updateLog(new_save) {
    	var log = document.querySelector(".ta-log");
        var delta = 0;
        if (window.localStorage.getItem('value')) {
        	delta = ((new Date()).getTime() - (new Date()).setTime(window.localStorage.getItem('timestamp'))) / 1000;
            if (new_save) {
            	log.textContent = 'Saved. Content will be available after browser refresh/reopen.';
                setTimeout(function() {
                	log.textContent = '';
                }, 3000);
            } else {
              		log.textContent = 'last saved: ' + delta + 's ago';
                    }
        }
   	}
            
  
}
