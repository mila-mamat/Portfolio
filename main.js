console.log()
 $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > (window.innerHeight*0.9));
    });