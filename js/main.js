const URL = 'https://quest.bozhko.net'

$('.hint').hide()
$('#hint-tab-li').hide()
$('.error').hide()
$.get(URL, function (data) {
    updateCodeList(data['keys']);
    if(data.keys_left < 9){
        $('.hint').show()
        $('#hint-tab-li').show()
    }
    return
});

$('#send-button').on('click', function (){
    let value = $('#code-input').val();
    if(value.length<5){
        $('.error').show()
        return
    }
    try {
        $.get(URL + '/addcode?code=' + value, function (data) {
            updateCodeList(data['keys']);
            if(data.keys_left < 9){
                $('.hint').show()
                $('#hint-tab-li').show()
            }
            $('#code-input').val('');
            $('#codes-tab').click();
            if(data.keys_left<1){
                window.location = 'finish-congratulations.html'
            }
            return
        });
    } catch (e){
        $('.error').show()
        return
    }
})
$('#code-input').on('keydown', function () {$('.error').hide()})

function updateCodeList(list){
    if(list.length < 1){
        $('#codes-div').html('<h4>Певно поки що ти не ввів жодного коду</h4>')
        return
    }
    $('#codes-div').html('');
    list.forEach(code => {
        $('#codes-div').append('<div class="code">'+code+'</div>')
    })
}


$('#hint-button').on('click', function () {
    $.get(URL + '/hint', function (data) {
        $('.hint').show()
        $('#hint-tab-li').show()
        $('#hint-text').html(data)
        return
    });
})