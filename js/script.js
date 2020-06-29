$( document ).ready(function() {
    console.log( "ready!" );
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });

    var typed = new Typed('.typed', {
        strings: ["Software Engineer", "Full Stack Web Developer", "Adventurer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });    

});

// $(function() {
//     console.log( "ready!" );
// });
