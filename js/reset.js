setTimeout(clearData(), 500)

function clearData(){
    $.get( 'http://localhost:5000/reset', function( data ) {
        $( "body" ).html( data );
        window.location = 'index.html'
    });
}