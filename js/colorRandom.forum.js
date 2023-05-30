$(document).ready(function () {
    function randomColor () {
        return Math.floor(Math.random()*16777215).toString(16);
    }

    $('.topics__title').each(function (index, value) {
        $(this).css("border-left", "6px solid #" + randomColor());
    });
});

