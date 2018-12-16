$(document).ready(function() {
    $('.burger-menu').click(function() {
        $(this).toggleClass('open');
        $('.nav').toggleClass('open');
    })
});