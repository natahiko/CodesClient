setTimeout(clearData(), 500)
const URL = 'http://localhost:5000/reset'

function clearData(){
    $.post( URL, function( data ) {
        $( "body" ).html( data );
    });
}