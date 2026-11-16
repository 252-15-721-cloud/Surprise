
$(window).on('load', function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function () {

    const balloonIds = [
        'b1', 'b2', 'b3', 'b4',
        'b5', 'b6', 'b7', 'b8'
    ];

    let vw;

    function arrangeBalloons() {
        vw = $(window).width() / 2;

        const positions = [
            -315, -225, -135, -45,
             45,  135,  225, 315
        ];

        balloonIds.forEach(function (id, index) {
            $('#' + id).stop();
            $('#' + id.replace('b', 'b') + '8');
        });

        const finalIds = [
            'b11', 'b22', 'b33', 'b44',
            'b55', 'b66', 'b77', 'b88'
        ];

        finalIds.forEach(function (id, index) {
            $('#' + id).animate({
                top: 240,
                left: vw + positions[index]
            }, 500);
        });
    }

    $(window).resize(function () {
        arrangeBalloons();
    });

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

    $('#play').click(function () {

        var audio = $('.song')[0];
        audio.play();

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

    $('#bannar_coming').click(function () {

        $('.bannar').addClass('bannar-come');

        $(this).fadeOut('slow').delay(6000)
            .promise().done(function () {
                $('#balloons_flying').fadeIn('slow');
            });
    });

    function flyBalloon(id) {

        const randleft = 1000 * Math.random();
        const randtop = 500 * Math.random();

        $('#' + id).animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            flyBalloon(id);
        });
    }

    $('#balloons_flying').click(function () {

        $('.balloon-border').animate({
            top: -500
        }, 8000);

        $('#b1,#b4,#b5,#b7').addClass(
            'balloons-rotate-behaviour-one'
        );

        $('#b2,#b3,#b6,#b8').addClass(
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

    $('#cake_fadein').click(function () {

        $('.cake').fadeIn('slow');

        $(this).fadeOut('slow').delay(3000)
            .promise().done(function () {
                $('#light_candle').fadeIn('slow');
            });
    });

    $('#light_candle').click(function () {

        $('.fuego').fadeIn('slow');

        $(this).fadeOut('slow').promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function () {

        balloonIds.forEach(function (id, index) {

            $('#' + id).stop();

            $('#' + id).attr(
                'id',
                'b' + (index + 1) + (index + 1)
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
