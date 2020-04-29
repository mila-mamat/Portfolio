console.log()
 $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > (window.innerHeight*0.9));
    });


window.onbeforeunload = function () {
   window.scrollTo(0, 0);
 }