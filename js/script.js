$(window).on("load", function() {
    $("#loader").delay(1000).fadeOut(1000);
});


// $('.banner-slider').owlCarousel({
//     loop: true,
//     items: 1,
//     dots: true,
//     nav: false,
//     smartSpeed: 900,
//     autoplay: true,
//     responsiveClass: true,


// });
$('.banner-slider').owlCarousel({
    loop: true,
    margin: 50,
    dots: true,
    nav:false,
    smartSpeed:900,
    autoplay:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


$('.owl-two').owlCarousel({
    loop:true,
    items:1,
    dots:true,
    nav:false,
    smartSpeed:900,
    autoplay:true,
    responsiveClass:true,
   
  
});

function onclickmenu() {
    document.getElementById("menu").classList.toggle("greenlist");
    document.getElementById("list").classList.toggle("change");
}

 


