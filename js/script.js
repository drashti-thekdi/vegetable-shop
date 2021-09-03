$(window).on("load",function(){
     $("#loader").delay(1000).fadeOut(1000);
});


$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    dots:true,
    nav:false,
    smartSpeed:900,
    autoplay:true,
    responsiveClass:true,
   
  
});

function onclickmenu(){
    document.getElementById("menu").classList.toggle("greenlist");
    document.getElementById("list").classList.toggle("change");
   
   
}

