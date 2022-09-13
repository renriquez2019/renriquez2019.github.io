const backtoTop = $('#btn-backtotop');


$(window).scroll(function () {

    if ($(window).scrollTop() > 300) {
        backtoTop.addClass("show");
    } else {
        backtoTop.removeClass("show");
    }
});

backtoTop.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0}, "300");
})