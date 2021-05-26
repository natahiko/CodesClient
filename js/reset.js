setTimeout(clearData(), 500)

function clearData(){
    $.get( 'https://quest.bozhko.net/reset', function( data ) {
        $( "body" ).html( data );
        window.location = 'index.html'
    });
}