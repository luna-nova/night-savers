$(document).ready(function() {

  // initial animation sequence
  var initAnimation = false;
  $("#wrap").hide();
  // check for mouse over the moon image
  $("#night-savers-logo").one("mouseenter", function(e) {
    $("#main-strip").animate({backgroundColor: "rgba(150, 150, 150, 0.50)"});
    $("#wrap").fadeIn();
    $(this).find("img").removeClass("glowing");
  }).one("mouseleave", function(e) {
    $("#main-strip").animate({width: "100%"}, 1000, function() {
      $("#main-strip").css({
        "display": "-webkit-box",
        "display": "-webkit-flex",
        "display": "-ms-flexbox",
        "display": "flex",
        "-webkit-justify-content": "space-between",
        "-ms-flex-pack": "space-between",
        "justify-content": "space-between",
        "-webkit-flex-wrap": "nowrap",
        "-ms-flex-wrap": "nowrap",
        "flex-wrap": "nowrap"
      }).animate({}, 1000, function() {
        $("#music").fadeIn("slow", function() {
          $(".main-section").css({"background-color": "rgba(150, 150, 150, 0.50)"});
          $("#main-strip").css({"background-color": "rgba(0, 0, 0, 0)"});
        });
        $("#code").fadeIn();
        initAnimation = true;
      })
    });
  });

  // if the starting animation is done then do these animations
  $(".info").hover(function() {
    var el = $(this);
    if (initAnimation === true) {
      el.find(".section-title").stop().slideUp("slow", function() {
        el.css({"overflow": "scroll"});
      });
    }
  }, function() {
    var el = $(this);
    if (initAnimation === true) {
      el.css({"overflow": "hidden"}).animate({scrollTop: 0}, "slow");
      el.find(".section-title").stop().slideDown("slow");
    }
  });

});
