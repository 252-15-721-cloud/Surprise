
$(window).on('load', function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function () {

    // Total 7 balloons
    const balloonIds = [
        'b1', 'b2', 'b3', 'b4',
        'b5', 'b6', 'b7'
    ];

    // Final balloon IDs
    const finalIds = [
        'b11', 'b22', 'b33', 'b44',
        'b55', 'b66', 'b77'
    ];

    // Arrange balloons for PC and mobile
    function arrangeBalloons() {

        const screenWidth = $(window).width();
        const center = screenWidth / 2;

        let positions;
        let balloonWidth;

        if (screenWidth <= 480) {
            // Mobile positions
            positions = [-135, -90, -45, 0, 45, 90, 135];
            balloonWidth = 70;
        } else if (screenWidth <= 768) {
            // Tablet positions
            positions = [-210, -140, -70, 0, 70, 140, 210];
            balloonWidth = 85;
        } else {
            // PC positions
            positions = [-315, -225, -135, -45, 45, 135, 225];
            balloonWidth = 100;
        }

        finalIds.forEach(function (id, index) {

            $('#' + id).stop().animate({
                top: 240,
                left: center - balloonWidth / 2 + positions[index]
            }, 500);

        });
    }

    // Window resize
    $(window).on('resize', function () {
        arrangeBalloons();
    });

    // Turn on lights
    $('#turn_on').click(function () {

        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');

        $('body').addClass('peach');

        $(this).fadeOut('slow').delay(5000)
            .promise().done(function () {
                $('#play').fadeIn('slow');
            });
    });

    // Play music
    $('#play').click(function () {

        const audio = $('.song')[0];

        if (audio) {
            audio.play().catch(function (error) {
                console.log('Audio playback error:', error);
            });
        }

        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');

        $('body').css('background-color', '#FFF');
        $('body').addClass('peach-after');

        $(this).fadeOut('slow').delay(6000)
            .promise().done(function () {
                $('#bannar_coming').fadeIn('slow');
            });
    });

    // Decorate banner
    $('#bannar_coming').click(function () {

        $('.bannar').addClass('bannar-come');

        $(this).fadeOut('slow').delay(6000)
            .promise().done(function () {
                $('#balloons_flying').fadeIn('slow');
            });
    });

    // Fly balloons
    function flyBalloon(id) {

        const screenWidth = $(window).width();
        const randleft = Math.random() * Math.max(0, screenWidth - 100);
        const randtop = 200 + Math.random() * 300;

        $('#' + id).animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            flyBalloon(id);
        });
    }

    // Balloons flying
    $('#balloons_flying').click(function () {

        $('.balloon-border').animate({
            top: -500
        }, 8000);

        $('#b1,#b4,#b5,#b7').addClass(
            'balloons-rotate-behaviour-one'
        );

        $('#b2,#b3,#b6').addClass(
            'balloons-rotate-behaviour-two'
        );

        balloonIds.forEach(function (id) {
            flyBalloon(id);
        });

        $(this).fadeOut('slow').delay(5000)
            .promise().done(function () {
                $('#cake_fadein').fadeIn('slow');
            });
    });

    // Show cake
    $('#cake_fadein').click(function () {

        $('.cake').fadeIn('slow');

        $(this).fadeOut('slow').delay(3000)
            .promise().done(function () {
                $('#light_candle').fadeIn('slow');
            });
    });

    // Light candle
    $('#light_candle').click(function () {

        $('.fuego').fadeIn('slow');

        $(this).fadeOut('slow').promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });

    // Show HBD JINIA
    $('#wish_message').click(function () {

        balloonIds.forEach(function (id, index) {

            $('#' + id).stop();

            $('#' + id).attr(
                'id',
                finalIds[index]
            );

        });

        arrangeBalloons();

        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);

        $(this).fadeOut('slow').delay(3000)
            .promise().done(function () {
                $('#story').fadeIn('slow');
            });
    });

    // Birthday message
    $('#story').click(function () {

        $(this).fadeOut('slow');

        $('.cake').fadeOut('fast').promise().done(function () {

            $('.message').fadeIn('slow');

            const messages = $('.message p');
            let i = 0;

            function showMessage() {

                if (i >= messages.length) {
                    $('.cake').fadeIn('fast');
                    return;
                }

                messages.eq(i).fadeIn('slow').delay(1200)
                    .fadeOut('slow', function () {
                        i++;
                        showMessage();
                    });
            }

            showMessage();
        });
    });

});
