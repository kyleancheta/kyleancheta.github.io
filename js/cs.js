$(document).ready(function() {

   var documentHeight, windowHeight, curScrollTop;

   $(window).scroll(function() {

      documentHeight = $(document).height();
      windowHeight = $(window).height();
      curScrollTop = $(document).scrollTop();

      if ($(document).scrollTop() > 0) {
         $(".cs-up").fadeIn(300);
      }
      else {
         $(".cs-up").fadeOut(300);
      }

      console.log("ratio: " + ((windowHeight + curScrollTop)/documentHeight));

      // if ($(window).width() < 1024) {
      //    if ((windowHeight + curScrollTop)/documentHeight > 0.99) {
      //       $(".cs-up").css("right", "45%");
      //    }
      //    // else if ((windowHeight + curScrollTop)/documentHeight >= 0.99) {
      //    //
      //    // }
      //    else {
      //       $(".cs-up").css("right", "5vmin");
      //    }
      // }
   });
});

$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});
