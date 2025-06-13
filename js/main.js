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

   function blockMobile() {
     if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
     const modal = document.createElement('div');
     modal.style.cssText = `
       position:fixed;top:0;left:0;right:0;bottom:0;
       background:rgba(0,0,0,0.8);z-index:9999;display:flex;align-items:center;justify-content:center;
     `;
     modal.innerHTML = `<div style="transform: translate(-80%, -80%);position: absolute;background:#fff;padding:24px 18px;border-radius:8px;max-width:320px;text-align:center;font-family:sans-serif;">
       <strong>Mobile view not supported</strong><br>
       This website's design is not available for mobile devices.<br>
       Please visit from a desktop browser.
       <br><br>
      
     </div>`;
     document.body.appendChild(modal);
   }
  }
  blockMobile()


}());
