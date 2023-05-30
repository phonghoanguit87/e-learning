
$(document).ready(function () {
    var offcanvas = $('#offcanvasBottom');
    var grippie = $('#grippie');
    var isDragging = false;
    var startY, startHeight;

    grippie.mousedown(function (e) {
        e.preventDefault();
        startY = e.pageY;
        startHeight = offcanvas.height();
        isDragging = true;
    });

    $(document).mousemove(function (e) {
        if (!isDragging) {
            return;
        }

        var newHeight = startHeight - (e.pageY - startY);
        console.log(newHeight);
        if (newHeight > 60 && newHeight < 600) {
            offcanvas.height(newHeight);
        }
    });

    $(document).mouseup(function () {
        isDragging = false;
    });
});