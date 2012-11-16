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
        var x = $('div.response');
        x.html(response.response);
        },
        error: function (response, status, xhr) {    //change to red color
            var x = $('div.response');
            x.html(status+ ' - '+ xhr.status);        
            x.css({
                    'color':'#F00'
            });
        },
    });
}

