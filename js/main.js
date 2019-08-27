$(document).ready(function () {


    var objpos = {
        pagetop: $('#pagetop').offset().top,
        about: $('#about').offset().top,
        skills: $('#skills').offset().top,
        testimonials: $('#testimonials').offset().top,
        contact: $('#contact').offset().top
    }

    $('a.page-scroll').click(function () {

        var target = $(this).data('target');

        var pos = objpos[target];

        $('html, body').animate({
            scrollTop: pos - 65
        }, 900)

        return false;

    });


    // affix the navbar after scroll below header
    var flag = false;

    $('html, body').scroll(function () {

        if (($(this).scrollTop() >= $('#header').outerHeight()) && (flag === false)) {
            $('#nav').addClass('fix');
            flag = true;
        }
        else if (($(this).scrollTop() < $('#header').outerHeight()) && (flag === true)) {
            $('#nav').removeClass('fix');
            flag = false;
        }
    })

    // draw chart
    $('#pagetop').scroll(function () {
        var top = $(this).scrollTop();

        if (top > 1300) {
            $('.chart').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#17d3e6',
                scaleColor : false,
                lineWidth: 6,
                trackColor: '#373737',
                lineCap : 'circle',
                animate: 2000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    })

    // backtoptop
    $('#pagetop').scroll(function(){
        if($(this).scrollTop()  > 1000){
            $('#myBtn').addClass('show');
        }
        else{
            $('#myBtn').removeClass('show');
        }
    })

    $('#myBtn').click(function(){
        $('#pagetop').animate({
            scrollTop: 0
        },900)
    })
});


