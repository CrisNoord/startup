var $x;
$x = $(document);
$x.ready(inicializarElementos);

function inicializarElementos() 
{
    var $x;
    $x = $("#boton1");
	$x.click(pedir);
}


function pedir(){
    $.ajax({
        type: 'GET',
        url: 'http://bootcamp.aws.af.cm/welcome/Kike!',
        dataType:'json',
        crossDomain: true,
                    
        success: function (response, status, xhr) {
        //debugger;
        $('<div id="response">'+response.response+'</div>').insertAfter('p');
     },
        error: function (response, status, xhr) {    
        $('<div id="fail">'+status+ ' - '+ xhr.status+'</div>').insertAfter('p'); 
        },
    });
}