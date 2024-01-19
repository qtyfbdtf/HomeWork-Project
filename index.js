$('#saveButton').click(function() {
    var lesson = $('#lessonInput').val();
    var description = $('#descriptionInput').val();

    $('#modalLesson').text(lesson);
    $('#modalDescription').text(description);
});

$('.modal-footer .btn-primary').click(function() {
    const alertBox = $('#lottieAlertSubmited');

    // Clear previous animation and set up new animation
    alertBox.empty().show();
    var animation = lottie.loadAnimation({
        container: alertBox[0],
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: './animations/Animation-Submited.json'
    });

    // Hide the alert on animation complete
    animation.addEventListener('complete', function() {
        alertBox.hide();
    });

    // Hide the modal
    $('#exampleModal').modal('hide');
});



//! In the future. If or else. if the home work not submited or it have an error an Error animation will pop.
/*
//* Event listener for the Save changes button in the modal
$(document).ready(function() {
    $('.modal-footer .btn-primary').click(function() {
        const alertBox = $('#lottieAlertError');

        // Clear previous animation and set up new animation
        alertBox.empty().show();
        var animation = lottie.loadAnimation({
            container: alertBox[0], // Direct DOM element reference is needed here
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: './animations/Animation-Error.json'
        });

        // Hide the alert on animation complete
        animation.addEventListener('complete', function() {
            alertBox.hide();
        });

        // Hide the modal
        $('#exampleModal').modal('hide');
    });

});
*/