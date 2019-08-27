$(document).ready(function () {
    $('#page-top').scroll(function () {
        var top = $(this).scrollTop();

        if (top > 1300) {
            $('.chart').easyPieChart({
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    })

    $('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
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
});


