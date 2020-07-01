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

  
    $("[data-fancybox]").fancybox();
    
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })


    $("#filters a").click(function() {

    $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();
        var targetElement = $(this).attr("href")
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition - 50
        }, "slow")
    })

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation)

    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px")
            body.addClass("fixedNav");
        }
        else {
            body.removeClass("fixedNav")
            body.css("padding-top", 0)
        }
    }

});
