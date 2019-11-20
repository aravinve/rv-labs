$(document).ready(function() {
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
      if ($(window).scrollTop() > 595) {
        $('#navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 595) {
        $('#navbar').removeClass('navbar-fixed');
      }
    });

    $('a[class="nav-link d-flex"]').click(function(e){
      e.preventDefault();
      $('body, html').animate({
        scrollTop: ($("#" + e.currentTarget.name).offset().top - 175)
      }, 600);
   });
  });

  