if (localStorage.getItem("hasWishes") === null || localStorage.getItem("hasWishes") === 0) {
   setTimeout(function() {
      localStorage["hasWishes"] = 0;
      window.location = "welcome.html";
   }, 4000);
}
else {
   setTimeout(function() {
      window.location = "welcome_wishes.html";
   }, 4000);
}
