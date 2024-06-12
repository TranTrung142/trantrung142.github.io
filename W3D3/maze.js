$(function() {
    // ex 1
    // $('#boundary1').mouseenter(function() {
    //     $(this).addClass('youlose');
    // })
    // $('#boundary1').mouseleave(function() {
    //     $(this).removeClass('youlose');
    // })

    // completed
    let gameStarted = false;
    let gameLost = false;

    $('#start').click(function() {
        gameStarted = true;
        gameLost = false;
        $('.boundary').removeClass('youlose');
        $('#status').text('Game started');
    });

    $('.boundary').mouseenter(function() {
        if (gameStarted) {
            gameLost = true;
            $('.boundary').addClass('youlose');
            $('#status').text('You lose');
        }
    });

    $('#end').mouseenter(function() {
        if (gameStarted && !gameLost) {
            // alert('You win');
            $('#status').text('You win');
            gameStarted = false;
        }
    })

    $('#maze').mouseleave(function() {
        if (gameStarted) {
            gameLost = true;
            $('.boundary').addClass('youlose');
            $('#status').text('You lose');
        }
    });
})