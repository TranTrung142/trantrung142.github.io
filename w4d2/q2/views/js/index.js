$(function() {
    $('#askButton').click(function() {
        $.get('/8ball').done(function(data) {
            $('#answer').text(data.answer);
        });
    });

    $('#question').keypress(function(event) {
        if (event.key === 'Enter') {
            $('#askButton').click();
        }
    });

    $('#question').focus(function() {
        this.select();
    });
});