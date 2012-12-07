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

$(document).ready(function(){

      var dropbox = document.getElementById('dropzone');

      // init event handlers
      dropbox.addEventListener("dragenter", dragEnter, false);
      dropbox.addEventListener("dragexit", dragExit, false);
      dropbox.addEventListener("dragover", dragOver, false);
      dropbox.addEventListener("drop", drop, false);
});


      function dragEnter(evt) {
        evt.stopPropagation();
        evt.preventDefault();
      }

      function dragExit(evt) {
        evt.stopPropagation();
        evt.preventDefault();
      }

      function dragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
      }

      function drop(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files;
        var count = files.length;

        
        if (count > 0)
          handleFiles(files);
      }


      function handleFiles(files) {
        var file = files[0];

        document.getElementById("dropzone").innerHTML = "Processing " + file.name;

        var reader = new FileReader();

       
        reader.onloadend = function (evt){
          var show = evt.target.result; 
          var destiny = $('#dragzone');
          destiny.append('<p> File information: <strong>' + file.name + '</strong> type: <strong>'+ file.type + '</strong> size: <strong>'+file.size+'</strong> bytes </p>');

        }

        
        reader.readAsDataURL(file);
      }

