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
        alert("respuesta recibida: \n"+response.response);
 
        //$('div.response').html(response.response);      para ej 6   

        },
        error: function (response, status, xhr) {
        $('div.fail').html(status+ ' - '+ xhr.status);           
        //$('<div id="fail"'+status+ ' - '+ xhr.status+'</div>').attr().insertAfter('p');
        },
    });
}
