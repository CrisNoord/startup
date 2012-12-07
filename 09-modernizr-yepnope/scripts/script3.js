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

