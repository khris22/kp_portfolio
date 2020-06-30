$( document ).ready(function() {
    console.log( "ready!" );
    // superSlides
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });

    // typedJs
    var typed = new Typed('.typed', {
        strings: ["Software Engineer", "Full Stack Web Developer", "Adventurer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    
    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        // margin:10,
        // nav:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })
    
    // animate on scroll for piechart
    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false

    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
            // piechart
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 300) {
            // stats counter
            $(".counter").each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            })
            countUpFinished = true
        }
    });

    
    

});
