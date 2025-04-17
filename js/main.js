
function main() {

(function () {
   'use strict';

 

  	$('a.page-scroll').click(function() {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        // }
      });

  $('a.Portfolio').click(function() {
        
          var target = $(this.hash);
          var tartet = $(this).next()
          $('.experience-tab').hide()
          target.show()
        
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        
      });



  
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

   

  

}());


}
main();