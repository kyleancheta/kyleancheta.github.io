var bioIndex = 0;
var bioArr = [
   "By day, designer at <a target='_blank' href='https://boldcommerce.com'><strong>Bold</strong><a>. By different time of day, bus chaser. And by night? I do whatever I want; no job.",
   "Not only can this guy design and code, he'll genuinely laugh at your terrible jokes. He's great for the self-esteem.<br>- Anonymous Classmate",
   "Not only do I design, but I know my way around web development, no thanks to my fancy schmancy computer science degree.",
   "On Wednesdays, I wear black. Same color I wear everyday. I only wear black.",
   "I'm a fun guy, like <a target='_blank' href='https://www.youtube.com/watch?v=2yf35s55Uyg'><strong>Kawhi</strong></a>.",
   "I'll have you know I've jumped over my own height. Twice. It might sound impressive, but it's really not.",
   "Adversity and I are best friends. I did my first solo trip on hard mode. My phone was stolen early in the trip...",
   "I don't trust people who always have their phone brightness at max."
];

$(document).ready(function() {

   var documentHeight, windowHeight, curScrollTop;
   var socialButtonTog = false;

   $("#hello-there").click(function() {
      $("#general-kenobi").animateCss("fadeIn fast");
   });

   $("#heading-bio").click(function() {
      console.log("heading-bio");
      changeBio();
   });

   $("#icon-mobi").click(function() {
      socialButtonTog = true;
      $("#icon-mobi").fadeOut(300).css("display", "none");
      $("#icon-close").fadeIn(300).css("opacity", 1);
      // if (mobile-landscape view)
      if ($(window).width() >= 568 && ($(window).width()/$(window).height()) >= 1.25) {
         $("#icon-tweet").animate({
            opacity: 1,
            bottom: "+=42vh"
         }, 250, function() {});
         $("#icon-gram").animate({
            opacity: 1,
            bottom: "+=28vh"
         }, 250, function() {});
         $("#icon-email").animate({
            opacity: 1,
            bottom: "+=14vh"
         }, 250, function() {});
      }
      // if (tablet view)
      else if ($(window).width() >= 768) {
         $("#icon-tweet").animate({
            opacity: 1,
            bottom: "+=36vh"
         }, 250, function() {});
         $("#icon-gram").animate({
            opacity: 1,
            bottom: "+=24vh"
         }, 250, function() {});
         $("#icon-email").animate({
            opacity: 1,
            bottom: "+=12vh"
         }, 250, function() {});
      }
      // if (mobile-portrait view)
      else {
         $("#icon-tweet").animate({
            opacity: 1,
            bottom: "+=57vw"
         }, 250, function() {});
         $("#icon-gram").animate({
            opacity: 1,
            bottom: "+=38vw"
         }, 250, function() {});
         $("#icon-email").animate({
            opacity: 1,
            bottom: "+=19vw"
         }, 250, function() {});
      }
   });

   $("#icon-close").click(function() {
      socialButtonTog = false;
      // if (mobile-landscape view)
      if ($(window).width() >= 568 && ($(window).width()/$(window).height()) >= 1.25) {
         $("#icon-tweet").animate({
            opacity: 0,
            bottom: "-=42vh"
         }, 250, function() {});
         $("#icon-gram").animate({
            opacity: 0,
            bottom: "-=28vh"
         }, 250, function() {});
         $("#icon-email").animate({
            opacity: 0,
            bottom: "-=14vh"
         }, 250, function() {});
      }
      // if (tablet view)
      else if ($(window).width() >= 768) {
         $("#icon-tweet").animate({
            opacity: 0,
            bottom: "-=36vh"
         }, 250, function() {});
         $("#icon-gram").animate({
            opacity: 0,
            bottom: "-=24vh"
         }, 250, function() {});
         $("#icon-email").animate({
            opacity: 0,
            bottom: "-=12vh"
         }, 250, function() {});
      }
      // if (mobile-portrait view)
      else {
         $("#icon-tweet").animate({
            opacity: 0,
            bottom: "-=57vw"
         }, 250, function() {});
         $("#icon-gram").animate({
            opacity: 0,
            bottom: "-=38vw"
         }, 250, function() {});
         $("#icon-email").animate({
            opacity: 0,
            bottom: "-=19vw"
         }, 250, function() {});
      }
      $("#icon-close").css("opacity", 0);
      $("#icon-mobi").fadeIn(300);
   });

   $(window).scroll(function() {
      documentHeight = $(document).height();
      windowHeight = $(window).height();
      curScrollTop = $(document).scrollTop();
      console.log(documentHeight);
      console.log(windowHeight);
      console.log("scrollTop: " + $(document).scrollTop());

      /* Pulse animation every time scroll is done */
      $('#heading-bio').animateCss('pulse fast');

      if ((windowHeight + curScrollTop)/documentHeight >= 0.95) {
         // console.log("B U C C I");
         $("#icon-mobi").fadeOut(300);
         // if (mobile-landscape view)
         if ($(window).width() >= 568) {
            $("#icon-tweet").css("opacity", 0).css("bottom", "4vh");
            $("#icon-gram").css("opacity", 0).css("bottom", "4vh");
            $("#icon-email").css("opacity", 0).css("bottom", "4vh");
            $("#icon-close").css("opacity", 0).css("bottom", "4vh");
         }
         // if (mobile-portrait view)
         else {
            $("#icon-tweet").css("opacity", 0).css("bottom", "5vw");
            $("#icon-gram").css("opacity", 0).css("bottom", "5vw");
            $("#icon-email").css("opacity", 0).css("bottom", "5vw");
            $("#icon-close").css("opacity", 0).css("bottom", "5vw");
         }
         socialButtonTog = false;
      }
      else {
         // console.log("G U C C I");
         if (!socialButtonTog) {
            $("#icon-mobi").fadeIn(300);
         }
      }
   });
});

function changeBio() {
   if (bioIndex > 6) {
      bioIndex = 0;
   }
   else {
      bioIndex++;
   }
   console.log(bioIndex);
   $("#heading-bio").html(bioArr[bioIndex]);
}

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
